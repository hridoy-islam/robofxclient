"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadCrumb from "@/components/BreadCrumb";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const teamMembers = [
  {
    name: "Andrew Max Fetcher",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Arnold Human",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mike Holder",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Joakim Ken",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Frater",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kevin Perry",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Frater",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Steven Smith",
    role: "CEO, technx",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=400&q=80",
  },
];

function TeamGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="container mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.08}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative h-56 md:h-64">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.3) brightness(0.75)" }}
                />
                {/* Blue tint overlay matching design */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(10,30,70,0.2) 0%, rgba(10,30,70,0.55) 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1 h-8 rounded-sm flex-shrink-0"
                      style={{
                        background: "linear-gradient(180deg, #4f46e5, #38bdf8)",
                      }}
                    />
                    <div>
                      <div className="text-white font-bold text-xs leading-snug">
                        {member.name}
                      </div>
                      <div className="text-white/60 text-xs">{member.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function OurTeamPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <BreadCrumb title="Our Team" />
      <TeamGrid />
      <Footer />
    </main>
  );
}
