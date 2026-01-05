"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const teamMembers = [
    // ... (same teamMembers array as before)
    {
        name: "Ajay Verma",
        title: "Web developer",
        image: "/images/aboutus.jpg",
        bio: "Hi, I’m Ajay Verma 👋\nFront-End Developer with 5+ Years of Experience\nI build fast, responsive & user-friendly websites.\nWorked on 15+ live projects including enterprise & global websites.",
        linkedin: "https://linkedin.com",
        role: "web-developer",
    },
    {
        name: "Ria Verma",
        title: "UI/UX designer",
        image: "/images/lela.jpg",
        bio: "Hi, I’m Ria Verma 👋\nUI/UX Designer with 1+ Years of Experience\nSpecialized in creating intuitive and beautiful interfaces.",
        linkedin: "https://linkedin.com",
        role: "designer",
    },
    {
        name: "Mahima Verma",
        title: "Web developer",
        image: "/images/aboutus.jpg",
        bio: "Hi, I’m Mahima Verma 👋\nFront-End Developer with 2+ Years of Experience\nFocused on performance and clean code.",
        linkedin: "https://linkedin.com",
        role: "web-developer",
    },
    {
        name: "Priya Verma",
        title: "UI/UX designer",
        image: "/images/lela.jpg",
        bio: "Hi, I’m Priya Verma 👋\nUI/UX Designer with 3+ Years of Experience\nPassionate about user-centered design.",
        linkedin: "https://linkedin.com",
        role: "designer",
    },
    {
        name: "Mansi Verma",
        title: "UI/UX designer",
        image: "/images/aboutus.jpg",
        bio: "Hi, I’m Mansi Verma 👋\nUI/UX Designer with 1+ Years of Experience\nLove crafting delightful experiences.",
        linkedin: "https://linkedin.com",
        role: "designer",
    },
    {
        name: "Aarti Verma",
        title: "UI/UX designer",
        image: "/images/lela.jpg",
        bio: "Hi, I’m Aarti Verma 👋\nSenior UI/UX Designer with 9+ Years of Experience\nExpert in design systems and branding.",
        linkedin: "https://linkedin.com",
        role: "designer",
    },
];

const roleOptions = [
    { label: "All", value: "all" },
    { label: "Web developer", value: "web-developer" },
    { label: "Designer", value: "designer" },
];

export default function TeamSlider() {
    const [selectedRole, setSelectedRole] = useState("all");
    const [openCard, setOpenCard] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const filteredMembers = teamMembers.filter((member) =>
        selectedRole === "all" ? true : member.role === selectedRole
    );

    // Duplicate multiple times for true seamless effect
    const sliderItems = [...filteredMembers, ...filteredMembers, ...filteredMembers];

    return (
        <section className="team-filter relative overflow-hidden bg-[#0A2A2F] py-20 text-white">

            <div className="text-center mb-16">
                <h2 className="text-5xl font-light tracking-tight">
                    Our team<span className="text-[#00C4B4]">.</span>
                </h2>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
                <h3 className="text-xl">Filter by:</h3>
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-4 bg-transparent border border-gray-600 rounded-lg px-8 py-4 text-lg font-medium hover:border-[#00C4B4] transition-all"
                    >
                        {roleOptions.find((o) => o.value === selectedRole)?.label || "By Role"}
                        <span className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}>
                            <img src="/images/open-nav-new.svg" alt="dropdown" className="w-5" />
                        </span>
                    </button>

                    {dropdownOpen && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                            <ul className="absolute top-full mt-2 w-[300px] bg-white text-black rounded-lg shadow-2xl border-t-4 border-[#00C4B4] z-50 overflow-hidden">
                                {roleOptions.map((option) => (
                                    <li
                                        key={option.value}
                                        onClick={() => {
                                            setSelectedRole(option.value);
                                            setDropdownOpen(false);
                                        }}
                                        className={`px-6 py-4 cursor-pointer text-black hover:bg-gray-100 transition font-medium  ${selectedRole === option.value ? "bg-gray-100 " : ""
                                            }`}
                                    >
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>

            {/* Infinite Continuous Slider */}
            <div className="overflow-hidden">
                <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
                    {sliderItems.map((member, index) => (
                        <div
                            key={`${member.name}-${index}`}
                            className="flex-shrink-0 w-80 px-4"
                            onClick={() => setOpenCard(index % filteredMembers.length)}
                        >
                            <div className="bg-[#0F3D3E] rounded-3xl overflow-hidden cursor-pointer hover:bg-black transition-all duration-300 group">
                                <div className="p-10 text-center">
                                    <div className="w-[150] h-[150] mx-auto rounded-full border-4 border-[#D4AF37] group-hover:border-[#00C4B4] transition-all overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            width={256}
                                            height={256}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h5 className="font-medium mt-8 text-xl">{member.name}</h5>
                                    <h6 className="text-gray-300 mt-2">{member.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {openCard !== null && filteredMembers[openCard] && (
                <div
                    className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-6"
                    onClick={(e) => e.target === e.currentTarget && setOpenCard(null)}
                >
                    <div className="bg-black border border-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black" />
                        <div className="p-16">
                            <div className="flex gap-10 items-start">
                                {filteredMembers[openCard].linkedin && (
                                    <a
                                        href={filteredMembers[openCard].linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0"
                                    >
                                        <div className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#00C4B4] transition">
                                            <span className="text-2xl">in</span>
                                        </div>
                                    </a>
                                )}
                                <div className="text-left text-gray-200">
                                    <p className="whitespace-pre-line text-lg">
                                        {filteredMembers[openCard].bio}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpenCard(null)}
                                className="absolute top-8 right-8 text-5xl hover:text-[#00C4B4] transition"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {filteredMembers.length === 0 && (
                <div className="text-center py-32">
                    <h3 className="text-4xl font-light">No result found</h3>
                </div>
            )}


            <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.333%);
          }
        }

        .animate-infinite-scroll {
          display: flex;
          animation: infinite-scroll 30s linear infinite;
          width: max-content;
        }

        /* Hover pe pause */
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}