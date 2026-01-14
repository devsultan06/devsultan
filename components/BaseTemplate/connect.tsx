"use client";

import { useState } from "react";
import ContactModal from "./contactmodal";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function ConnectSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
    

      <section className="container mx-auto px-4 mb-16 ">
        <h2 className="text-2xl font-bold mb-4">Collaborators I Build With</h2>
        <p className="text-sm text-zinc-400 mb-6">
          Designers, developers, and dreamers who help bring big ideas to life I&apos;ve been fortunate to build alongside brilliant minds who challenge and inspire me every step of the way.
        </p>

        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-4">How I Build</h2>
        <p className="text-sm text-zinc-400 mb-6">
          I approach development with a blend of speed, structure, and curiosity always thinking in systems, and shipping fast without sacrificing clarity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="text-xl">🔍</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Understand the Problem</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I start by breaking down the problem the *why*, not just the *what*. Real solutions start with real clarity.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="text-xl">🧠</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Plan the Architecture</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I design a mental or written map of components, data flow, libraries and modularised file structure before diving in from folder naming to atomic design.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="text-xl">⚛️</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Build with Speed & Structure</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I develop using modern tools like React, TypeScript, and Tailwind CSS balancing speed and scalability with clean code.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="text-xl">🚀</div>
            <div>
              <h3 className="text-base font-semibold text-white mb-1">Iterate & Ship</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I launch fast,  whether it&apos;s Vercel or Netlify, gather feedback, and continuously improve.
              </p>
            </div>
          </div>
        </div>
      </section>



      <div className="max-w-3xl mx-auto border mb-16 bg-zinc-800/50 border-zinc-700 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Let&apos;s build something great together</h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
          Whether you&apos;re looking to collaborate on a project, need a developer for your team,
          or just want to chat about ideas — I&apos;d love to hear from you. Let&apos;s connect and see
          what we can create!
        </p>
        <button
          onClick={() => setOpen(true)}
          className="bg-gray-100 text-black px-6 py-3 rounded-md font-medium hover:bg-white transition"
        >
          Connect With Me
        </button>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
