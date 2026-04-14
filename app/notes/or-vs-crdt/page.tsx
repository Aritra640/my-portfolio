export default function Page(): React.ReactElement {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">
          Operational Transform (OT) vs CRDT
        </h1>

        {/* Intro */}
        <p className="text-slate-300 mb-10">
          This note compares OT and CRDT in the context of{" "}
          <span className="text-indigo-400 font-medium">Sketcha</span>, a
          collaborative drawing application similar to Excalidraw.
        </p>

        {/* Section */}
        <Section title="1. Problem Context">
          <p>
            Sketcha is a real-time collaborative canvas where multiple users can
            draw, move, resize, and delete shapes concurrently.
          </p>
          <p className="mt-2">
            Unlike text editors, the data model consists of structured objects:
            shapes with properties like position, color, and size.
          </p>
        </Section>

        <Section title="2. Operational Transformation (OT)">
          <p>
            OT works by transforming operations against each other to maintain
            consistency across clients.
          </p>

          <CodeBlock>
{`{ "type": "move", "id": "shape1", "dx": 10, "dy": 5 }
{ "type": "delete", "id": "shape1" }`}
          </CodeBlock>

          <ul className="list-disc ml-6 mt-3 text-slate-300">
            <li>Requires central server ordering</li>
            <li>Complex transformation logic</li>
            <li>Best suited for text editing</li>
          </ul>
        </Section>

        <Section title="3. CRDT (Conflict-free Replicated Data Types)">
          <p>
            CRDTs ensure eventual consistency without needing transformation
            logic. Each client updates state locally and merges deterministically.
          </p>

          <CodeBlock>
{`{
  "id": "shape1",
  "position": { "x": 100, "y": 200 },
  "color": "red",
  "version": 5
}`}
          </CodeBlock>

          <ul className="list-disc ml-6 mt-3 text-slate-300">
            <li>No central coordination required</li>
            <li>Supports offline edits</li>
            <li>Uses timestamps / vector clocks</li>
          </ul>
        </Section>

        <Section title="4. Key Differences">
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border border-slate-700">
              <thead className="bg-slate-800">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">OT</th>
                  <th className="p-3">CRDT</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-t border-slate-700">
                  <td className="p-3">Data Model</td>
                  <td className="p-3">Operations</td>
                  <td className="p-3">State-based</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-3">Best Use Case</td>
                  <td className="p-3">Text editors</td>
                  <td className="p-3">Structured data</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-3">Offline Support</td>
                  <td className="p-3">Weak</td>
                  <td className="p-3">Strong</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="p-3">Complexity</td>
                  <td className="p-3">Transform logic</td>
                  <td className="p-3">Merge rules</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="5. Why CRDT fits Sketcha better">
          <ul className="list-disc ml-6 text-slate-300">
            <li>Canvas elements are independent objects</li>
            <li>No need for complex transformation logic</li>
            <li>Better scalability for real-time systems</li>
            <li>Supports offline-first workflows</li>
          </ul>
        </Section>

        <Section title="6. Recommended Architecture">
          <ul className="list-disc ml-6 text-slate-300">
            <li>Each shape is an independent entity</li>
            <li>Use timestamps for conflict resolution</li>
            <li>Apply updates optimistically on client</li>
            <li>Sync via WebSockets</li>
          </ul>
        </Section>

        <Section title="7. Final Takeaway">
          <p className="text-lg">
            <span className="text-red-400">Avoid OT</span> for canvas-based apps.
            <br />
            <span className="text-green-400">
              Use CRDT-inspired state synchronization
            </span>{" "}
            for simplicity and scalability.
          </p>
        </Section>

      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-slate-300 leading-relaxed space-y-2">
        {children}
      </div>
    </section>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mt-4 p-4 bg-slate-800 rounded-lg text-sm overflow-x-auto">
      <code>{children}</code>
    </pre>
  );
}
