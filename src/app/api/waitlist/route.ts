import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { parseWaitlistEntry } from "@/lib/waitlist";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see or fill the "company" field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const entry = parseWaitlistEntry(body);
  if ("error" in entry) {
    return NextResponse.json({ error: entry.error }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    console.error("Waitlist: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return NextResponse.json(
      { error: "Signups aren't open yet — please check back soon." },
      { status: 503 },
    );
  }

  const supabase = createClient(url, serviceKey, { auth: { persistSession: false } });
  const { error } = await supabase.from("waitlist").insert(entry);

  // 23505 = unique violation: this email already joined with this role. Treat as success.
  if (error && error.code !== "23505") {
    console.error("Waitlist insert failed", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
