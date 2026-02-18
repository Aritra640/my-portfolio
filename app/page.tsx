import Avatar from "@/components/avatar";
import { Github } from "@/components/icons/github";
import { X } from "@/components/icons/x";
import { Menu } from "@/components/menu";

export default function Home(): React.ReactElement {
  return (
    <div className="h-screen w-screen bg-background">
      <div>
        <Menu />
      </div>
      <div className="flex justify-center items-center gap-8 pt-6 md:pt-16">
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
        </div>
      </div>
    </div>
  );
}
