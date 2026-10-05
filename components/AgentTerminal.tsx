"use client";
import { useEffect, useState } from "react";

const script = [
  ["orchestrator", "task received → “score brand visibility for client X”"],
  ["router", "dispatching → GEO agent"],
  ["geo", "querying ChatGPT · Perplexity · AI Overviews"],
  ["geo", "presence 72 · citations 64 · share-of-voice 58"],
  ["guardrail", "approval required before publish ⏸"],
  ["orchestrator", "status: awaiting human approval ✔"],
  ["attack-eye", "tenant scan queued → celery worker #3"],
  ["ollama", "local LLM triage complete · 0 criticals"],
];

export default function AgentTerminal() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const t = setInterval(() => setN((x) => (x >= script.length ? 1 : x + 1)), 1600);
    return () => clearInterval(t);
  }, []);
  const lines = script.slice(0, n);
  return (
    <div className="terminal">
      <div className="term-bar">
        <i /><i /><i />
        <span>agents@saad ~ simulated demo</span>
      </div>
      <div className="term-body">
        {lines.map(([who, msg], i) => (
          <p key={`${n}-${i}`} className={i === lines.length - 1 ? "fresh" : ""}>
            <b>[{who}]</b> {msg}
          </p>
        ))}
        <p className="prompt">$ <span className="caret">▍</span></p>
      </div>
    </div>
  );
}
