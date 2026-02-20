import Avatar from "@/components/avatar";
import { Github } from "@/components/icons/github";
import { X } from "@/components/icons/x";
import DownloadResumeButton from "./resume";
import { ProjectButton } from "./projects_button";

export function Status() {
  return (
    <div className="flex justify-center items-center gap-8 md:gap-12 pt-10 md:pt-16">
      <Avatar />

      <div className="font-mono text-white text-xl md:text-2xl">
        <p>Hi, I am Aritra Chatterjee</p>
        <p className="text-base md:text-lg text-gray-400 mt-2">
          I build things for the web, dabble in Web3, and love applying AI to
          real problems
        </p>
        <p className="text-base md:text-lg text-gray-400 mt-2">
          follow me at: <X /> <Github />
        </p>
        <p className="pt-4 flex gap-3">
          <div><DownloadResumeButton /></div>
          <div><ProjectButton /></div>
        </p>
      </div>
    </div>
  );
}
