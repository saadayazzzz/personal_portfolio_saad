import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Saad Ayaz — AI/ML Engineer",
  description:
    "AI/ML Engineer building production agentic AI, LLM & RAG systems. Multi-agent orchestration, computer vision and full-stack deployment.",
  openGraph: {
    title: "Muhammad Saad Ayaz — AI/ML Engineer",
    description: "Agentic AI, LLMs & RAG Systems. Production AI from model to deployment.",
    type: "website",
  },
};

const themeScript = `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
