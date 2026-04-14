"use client";

import { Button } from "@/components/buttons";

export function Menu() {
  return (
    <div>
      <div className="flex justify-around gap-8 pt-2 md:pt-4">
        <Button name="about me" onClick={() => {}} />
        <Button name="projects" onClick={() => {}} />
        <Button name="notes" onClick={() => {}} />
        <Button name="contact me" onClick={() => {}} />
      </div>

      <div className="p-2"></div>
    </div>
  );
}
