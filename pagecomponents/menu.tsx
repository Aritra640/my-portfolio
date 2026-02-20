"use client";

import SearchIcon from "@/components/icons/search";

export function Menu() {
  return (
    <div className="flex justify-around pt-2 md:pt-4">
      <button className="btn btn-outline btn-primary border-purple-900 rounded-2xl hover:bg-purple-950">
        home
      </button>
      <button className="btn btn-outline btn-primary border-purple-900 rounded-2xl hover:bg-purple-950">
        projects
      </button>
      <button className="btn btn-outline btn-primary border-purple-900 rounded-2xl hover:bg-purple-950">
        notes
      </button>
      <button className="btn btn-outline btn-primary border-purple-900 rounded-2xl hover:bg-purple-950">
        contact
      </button>
      <button className="btn btn-outline btn-primary border-purple-900 rounded-2xl hover:bg-purple-950">
        <SearchIcon />
      </button>
    </div>
  );
}
