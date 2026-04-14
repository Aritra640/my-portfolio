import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  notesUrl?: string;
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  notesUrl,
}: ProjectCardProps): React.ReactElement {
  const redirectUrl = liveUrl ?? githubUrl;

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
      
      {/* Image / Overview */}
      <a href={redirectUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </a>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        
        {/* Title */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Description */}
        <p className="text-sm text-slate-300">{description}</p>

        {/* Actions */}
        <div className="flex gap-3 mt-2 flex-wrap">
          
          {/* GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1 rounded-md bg-slate-700 hover:bg-slate-600 transition"
          >
            GitHub
          </a>

          {/* Live */}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 transition"
            >
              Live
            </a>
          )}

          {/* Notes */}
          {notesUrl && (
            <a
              href={notesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 transition"
            >
              Notes
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
