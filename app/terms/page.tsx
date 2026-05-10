import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LegalContent } from "@/components/LegalContent";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing the use of the Bluetrace Technologies website and services.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "May 10, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Last updated · ${lastUpdated}`}
        title={<>Terms &amp; Conditions</>}
        description="Please read these terms carefully before using our website or engaging our services."
      />

      <section className="section pt-0">
        <div className="container-page">
          <LegalContent>
            <LegalContent.Section title="1. Acceptance of terms">
              <p>
                By accessing or using {siteConfig.url} (the &quot;Site&quot;) or any services provided by {siteConfig.legalName} (&quot;Bluetrace&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms &amp; Conditions and our Privacy Policy.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="2. Use of the Site">
              <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use of the Site.</p>
            </LegalContent.Section>

            <LegalContent.Section title="3. Intellectual property">
              <p>
                All content, trademarks, logos and software on the Site are owned by Bluetrace or its licensors and are protected by applicable intellectual property laws. You may not reuse, copy or redistribute content without prior written consent.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="4. Services & engagements">
              <p>
                Specific engagements with Bluetrace are governed by a separate written agreement (e.g., master services agreement, statement of work). Information on this Site is for general purposes and does not by itself constitute a contract or commitment.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="5. Third-party links">
              <p>
                The Site may contain links to third-party websites. We do not endorse and are not responsible for the content, policies or practices of those sites.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="6. Disclaimers">
              <p>
                The Site and its content are provided &quot;as is&quot; without warranties of any kind, whether express or implied. Bluetrace does not warrant that the Site will be uninterrupted, error-free or free of harmful components.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="7. Limitation of liability">
              <p>
                To the maximum extent permitted by applicable law, Bluetrace shall not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or related to your use of the Site or services.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="8. Indemnification">
              <p>
                You agree to indemnify and hold harmless Bluetrace and its officers, employees and agents from any claims, damages or expenses arising out of your use of the Site or violation of these Terms.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="9. Governing law">
              <p>
                These Terms are governed by the laws of India, without regard to its conflict of law principles. Disputes shall be subject to the exclusive jurisdiction of the competent courts located in India.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="10. Changes to terms">
              <p>
                We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </LegalContent.Section>

            <LegalContent.Section title="11. Contact">
              <p>
                Questions about these Terms? Email{" "}
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
