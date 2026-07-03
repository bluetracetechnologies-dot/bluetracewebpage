import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 8 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const budgetRange = String(formData.get("budgetRange") || "").trim();
    const timeline = String(formData.get("timeline") || "").trim();
    const details = String(formData.get("details") || "").trim();
    const attachment = formData.get("attachment");

    if (!name || !company || !email || !phone || !projectType || !budgetRange || !timeline || !details) {
      return NextResponse.json(
        { ok: false, message: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (attachment instanceof File && attachment.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { ok: false, message: "Attachment exceeds 8MB. Please share a smaller file." },
        { status: 400 },
      );
    }

    const leadPayload = {
      submittedAt: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      projectType,
      budgetRange,
      timeline,
      details,
      attachment:
        attachment instanceof File && attachment.size > 0
          ? {
              name: attachment.name,
              type: attachment.type,
              size: attachment.size,
            }
          : null,
    };

    const webhook = process.env.BLUETRACE_LEAD_WEBHOOK_URL;

    if (webhook) {
      const webhookRes = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (!webhookRes.ok) {
        return NextResponse.json(
          {
            ok: false,
            message:
              "Lead capture endpoint is configured but not reachable. Please email rahim@bluetrace.tech directly.",
          },
          { status: 502 },
        );
      }
    }

    return NextResponse.json({
      ok: true,
      message: webhook
        ? "Thank you. Your requirement was submitted successfully."
        : "Thank you. Inquiry received. Configure BLUETRACE_LEAD_WEBHOOK_URL to persist submissions.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to process inquiry right now." },
      { status: 500 },
    );
  }
}
