import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(1200px 600px at 10% 0%, rgba(30,144,255,0.45), transparent 60%), radial-gradient(900px 500px at 100% 100%, rgba(139,92,246,0.45), transparent 60%), #05070D",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              background: "#0F1F4D",
              border: "1px solid rgba(59,130,246,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 60px rgba(59,130,246,0.45)",
            }}
          >
            <svg width="84" height="84" viewBox="0 0 64 64" fill="none">
              <path d="M 14 22 A 18 18 0 0 1 50 22" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="14" cy="22" r="1.8" fill="#3B82F6" />
              <circle cx="50" cy="22" r="1.8" fill="#3B82F6" />
              <text x="13" y="52" fontFamily="'Arial Black',Impact,sans-serif" fontWeight="900" fontSize="34" fill="#3B82F6" letterSpacing="-2">B</text>
              <text x="32" y="52" fontFamily="'Arial Black',Impact,sans-serif" fontWeight="900" fontSize="34" fill="#FFFFFF" letterSpacing="-2">T</text>
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: -1, display: "flex" }}>
              <span style={{ color: "#3B82F6" }}>Blue</span>
              <span style={{ color: "white" }}>Trace</span>
            </div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 6,
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                marginTop: 4,
              }}
            >
              Technologies — Embedded · IoT · AI
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Building{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #22D3EE, #1E90FF 50%, #8B5CF6)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Intelligent Digital
            </span>{" "}
            Infrastructure
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)" }}>
            AI · Embedded · IoT · Cloud · SaaS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>bluetrace.tech</div>
          <div>{siteConfig.legalName}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
