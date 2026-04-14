import { NotesBar } from "@/components/notes_component";

export function Notes(): React.ReactElement {
  return (
    <div className="max-w-6xl mx-auto">
      <div className=" pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NotesBar
          title="OR vs CRDT"
          description="Operational Transform vs Conflict-free Replicated Data Types"
        />
      </div>
    </div>
  );
}
