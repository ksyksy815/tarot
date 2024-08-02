import { type ClassValue, clsx } from "clsx";
import { marked } from "marked";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (error: Error, message: string) => {
  console.log(message);
  console.log(error);
};

export const renderMarkdown = (text: string) => {
  return {
    __html: marked(text),
  };
};
