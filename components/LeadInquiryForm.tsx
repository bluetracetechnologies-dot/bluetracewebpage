"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  budgetRangeOptions,
  projectTypeOptions,
  timelineOptions,
} from "@/lib/lead";

type SubmitState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function LeadInquiryForm() {
  const [status, setStatus] = useState<SubmitState>({ type: "idle", message: "" });
  const [sending, setSending] = useState(false);
  const formId = useMemo(
    () => `lead-form-${Math.random().toString(36).slice(2, 8)}`,
    [],
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });
      const payload = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !payload.ok) {
        throw new Error(payload.message || "Unable to submit inquiry right now.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: payload.message || "Thanks. Your requirement has been received.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Submission failed. Please email rahim@bluetrace.tech.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form id={formId} onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Field label="Name" name="name" required />
      <Field label="Company / Organization" name="company" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="WhatsApp / Phone" name="phone" required />

      <SelectField
        label="Project Type"
        name="projectType"
        options={projectTypeOptions}
        className="md:col-span-2"
        required
      />
      <SelectField
        label="Budget Range"
        name="budgetRange"
        options={budgetRangeOptions}
        className="md:col-span-2"
        required
      />
      <SelectField
        label="Timeline"
        name="timeline"
        options={timelineOptions}
        className="md:col-span-2"
        required
      />

      <div className="md:col-span-2">
        <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          Requirement Details
        </label>
        <textarea
          name="details"
          rows={6}
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
          placeholder="Share hardware, firmware, software scope, timeline, and expected deliverables."
        />
      </div>

      <div className="md:col-span-2">
        <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          File Upload (optional)
        </label>
        <input
          type="file"
          name="attachment"
          className="mt-2 block w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-brand-electric/20 file:px-4 file:py-2 file:text-xs file:font-semibold file:text-white"
        />
        <p className="mt-2 text-xs text-white/45">
          Accepted for project briefs, BOM snapshots, architecture notes, or requirement docs. Max 8MB.
        </p>
      </div>

      <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-white/50">
          By submitting, you agree that Bluetrace can contact you about this inquiry.
        </p>
        <button type="submit" disabled={sending} className="btn-primary">
          {sending ? "Submitting..." : "Send Requirement"}
        </button>
      </div>

      {status.message ? (
        <p
          className={`md:col-span-2 text-sm ${
            status.type === "error" ? "text-red-300" : "text-emerald-300"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  className = "",
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  className?: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
        {label}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-white/10 bg-brand-ink/80 px-4 py-3 text-sm text-white focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
