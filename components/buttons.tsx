"use client";

interface ButtonProps {
  name: string;
  onClick: () => void;
}

export function Button({ name, onClick }: ButtonProps) {
  return (
    <button className="btn btn-soft btn-primary rounded-2xl" onClick={onClick}>
      {name}
    </button>
  );
}
