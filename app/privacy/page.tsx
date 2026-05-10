import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LegalContent } from "@/components/LegalContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bluetrace Technologies Private Limited collects, uses, and protects information when you use our website and services.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "May 10, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Last updated · ${lastUpdated}`}
        title={<>Privacy Policy</>}
        description="This policy explains what information we collect, how we use it, and the choices available to you."
      />

      <section className="section pt-0">
        <div className="container-page">
          <LegalContent>
            <LegalContent.Section title="1. Introduction">
              <p>
                {siteConfig.legalName} (&quot;Bluetrace&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates {siteConfig.url} and related services. This policy describes how we handle information collected through our website and the services we provide.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="2. Information we collect">
              <p>We collect limited information necessary to operate our website and respond to inquiries:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Contact details you provide voluntarily (name, email, company).</li>
                <li>Project or message content submitted via our contact forms or email.</li>
                <li>Basic technical data (IP address, device, browser) for security and analytics.</li>
              </ul>
            </LegalContent.Section>

            <LegalContent.Section title="3. How we use information">
              <ul className="list-disc space-y-1 pl-6">
                <li>To respond to inquiries and deliver requested services.</li>
                <li>To improve, secure and operate our website and infrastructure.</li>
                <li>To meet legal, contractual and compliance obligations.</li>
              </ul>
            </LegalContent.Section>

            <LegalContent.Section title="4. Sharing & disclosure">
              <p>
                We do not sell personal information. We may share data with vetted service providers (e.g., hosting, analytics, email) under appropriate confidentiality and data-protection terms, or where required by law.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="5. Data retention">
              <p>
                We retain personal information only as long as necessary to fulfill the purposes described above, comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="6. Security">
              <p>
                We use industry-standard administrative, technical and physical safeguards to protect information. No system is perfectly secure, but we continuously review and improve our practices.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="7. Your rights">
              <p>
                Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict use of your personal information. To exercise these rights, contact us at{" "}
                <a className="underline" href={`mailto:${siteConfig.emails.primary}`}>
                  {siteConfig.emails.primary}
                </a>
                .
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="8. Cookies">
              <p>
                We may use essential cookies and privacy-friendly analytics. You can control cookies through your browser settings.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="9. Changes to this policy">
              <p>
                We may update this policy from time to time. Material changes will be communicated via this page with an updated date.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="10. Contact">
              <p>
                Questions about this policy? Email{" "}
                <a className="underline" href={`mailto:${siteConfig.emails.primary}`}>
                  {siteConfig.emails.primary}
                </a>
                .
              </p>
            </LegalContent.Section>
          </LegalContent>
        </div>
      </section>
    </>
  );
}
