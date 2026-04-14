import { Menu } from "@/pagecomponents/menu";
import { Notes } from "@/pagecomponents/notes";
import { Projects } from "@/pagecomponents/project";
import { Status } from "@/pagecomponents/status";

export default function Home(): React.ReactElement {
  return (
    <div className="w-screen bg-slate-900 text-white">
      {/* Fixed Menu */}
      <div className="fixed top-0 rounded-xl left-0  w-full z-50 bg-slate-900/40 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-1">
          <Menu />
        </div>
      </div>

      {/* Hero Section (FULL SCREEN) */}
      <section className="h-screen flex items-center px-6 pt-16">
        <Status />
      </section>

      {/* Projects Section (next screen) */}
      <section className="h-screen px-6 py-12 bg-slate-950 border-t border-slate-800">
        <h2 className="text-2xl flex justify-center items-center font-semibold mb-6">Projects</h2>
        <Projects />
      </section>


      <section className="h-screen px-6 py-12 bg-slate-950 border-t border-slate-800">
        <h2 className="text-2xl pt-16 flex justify-center items-center font-semibold mb-6">My notes</h2>
        <Notes />
      </section>
    </div>
  );
}
