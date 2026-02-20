import { Menu } from "@/pagecomponents/menu";
import { Status } from "@/pagecomponents/status";

export default function Home(): React.ReactElement {
  return (
    <div className="h-screen w-screen bg-background">
      <div>
        <Menu />
      </div>

      <div>
        <Status />
      </div>
    </div>
  );
}
