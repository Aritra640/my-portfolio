import { ProjectCard } from "@/components/project_card";

export function Projects(): React.ReactElement {
  return (
    <div className="max-w-6xl mx-auto">
      
      <div className=" pt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <ProjectCard
          title="Sketcha"
          description="A collaborative drawing app that allows users to sketch ideas in real-time."
          imageUrl="/projects/sketcha.png"
          githubUrl="https://github.com/Aritra640/Sketcha"
          liveUrl="https://sketcha.iamaritra.space"
        />

      </div>

    </div>
  );
}
