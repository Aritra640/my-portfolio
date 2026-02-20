//this is a generic button component that will have support for the button types in the whole project
"use client";

interface ButtonProps {
  title: string;
  type: "menu" | "link" | "normal";
  onClick: () => void;
}

const buttonStyles = {
  menu: "",
  link: "",
  normal: "",
};

export function Button({title, type, onClick}: ButtonProps) {

  return <button onClick={onClick} className={buttonStyles[type]}>{title}</button>
}
