"use client";
import { Github, Home, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t p-4 backdrop-blur-lg dark:border-gray-800">
      <div className="container flex items-center justify-between  text-sm">
        <div className="flex items-center gap-4">
          <Home
            className="h-5 w-5 cursor-pointer bg-clip-text tbg-gradient-to-t from-red-600 to-neutral-200"
            onClick={() => {
             window.location.href = '/'
            }}
          />
          <Linkedin
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              window.open("https://www.linkedin.com/in/eduardo-gomes-098735260/");
            }}
          />
          <Github
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              window.open("https://www.github.com/e17gomes");
            }}
          />
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Developed by <span className="underline decoration-double cursor-pointer">Eduardo Gomes</span>
        </p>
      </div>
    </footer>
  );
}