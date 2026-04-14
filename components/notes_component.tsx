import Link from "next/link";

type NotesBarProps = {
  title: string;
  description: string;
};

export function NotesBar({
  title,
  description,
}: NotesBarProps): React.ReactElement {
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/notes/${slug}`}>
      <div className="w-full px-5 py-4 bg-slate-800 hover:bg-slate-700 transition rounded-lg border border-slate-700 cursor-pointer group">
        
        <div className="flex flex-col gap-1">
          
          {/* Title */}
          <h3 className="text-base font-semibold group-hover:text-indigo-400 transition">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-400">
            {description}
          </p>

        </div>
      </div>
    </Link>
  );
}
