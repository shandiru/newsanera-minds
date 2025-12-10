"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const HeroCurasol = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 900,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const projects = [
        {
            id: "1",
            title: "Thoughtful, down-to-earth workshops.",
            snippet:
                "Designed for nurseries, schools, colleges, and universities grounded, warm, and tailored to real needs.",
            beforeImage: "/brae-3.jpeg",
            afterImage: "/brae-1.jpeg",
            link: "/#",
            category: "Respray",
        },
        {
            id: "2",
            title: "Led by accredited psychotherapists",
            snippet:
                "We translate evidence-based practice into real-world, practical tools that staff and students can use immediately.",
            beforeImage: "/c1.jpg",
            afterImage: "/c3.jpg",
            link: "/#",
            category: "Restoration",
        },
        {
            id: "3",
            title: "Flexible, assessment-based approach.",
            snippet:
                " Every session is shaped around your environment from staff training and student mental health days to curriculum-linked wellbeing workshops.",
            beforeImage: "/w1.jpg",
            afterImage: "/w2.jpg",
            link: "/#",
            category: "Touch Ups & Smart Repairs",
        },
        {
            id: "4",
            title: "Supportive workshops, assemblies & presentations",
            snippet:
                "Covering emotional regulation, self-esteem building, transitions, stress, and academic pressure..",
            beforeImage: "/f5.jpg",
            afterImage: "/g2.jpg",
            link: "/#",
            category: "Interior Dash Vinyl Wrap",
        },
        {
            id: "5",
            title: "A vision for wellbeing woven into education",
            snippet:
                "When wellbeing is part of the learning environment, every child and adult feels seen, supported, and safe to grow.",
            beforeImage: "/z1.jpg",
            afterImage: "/z2.jpg",
            link: "/#",
            category: "Fiberglass Repairs",
        },
       
    ];

    const displayOrder = [1, 2, 3, 4, 0];

    const scrollToCard = (index) => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const cardElements = container.querySelectorAll(".project-card");
        const targetCard = cardElements[index];
        if (!targetCard) return;

        const scrollLeft =
            targetCard.offsetLeft -
            container.offsetWidth / 2 +
            targetCard.offsetWidth / 2;

        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        setActiveIndex(index);
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const onScroll = () => {
            const center = container.scrollLeft + container.offsetWidth / 2;

            const cards = container.querySelectorAll(".project-card");
            let closest = 0;
            let minDiff = Infinity;

            cards.forEach((card, idx) => {
                const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                const diff = Math.abs(center - cardCenter);
                if (diff < minDiff) {
                    minDiff = diff;
                    closest = idx;
                }
            });

            setActiveIndex(closest);
        };

        container.addEventListener("scroll", onScroll);

        setTimeout(() => scrollToCard(displayOrder[0]), 350);

        let position = 0;
        const autoScroll = setInterval(() => {
            scrollToCard(displayOrder[position]);
            position = (position + 1) % displayOrder.length;
        }, 4000);

        return () => {
            container.removeEventListener("scroll", onScroll);
            clearInterval(autoScroll);
        };
    }, []);

    return (
        <div
            className="text-[#1F5C46] py-12 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundColor: "white",
                fontFamily: '"EB Garamond", serif',
            }}
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto p-4">

                {/* Heading */}
                <div data-aos="fade-down">
                    <p className="text-4xl lg:text-5xl font-semibold text-center font-display
                  font-bold
                  bg-clip-text 
                  bg-linear-to-b 
                  from-[#02130E] via-[var(--brand-deep)] to-[var(--brand-teal)]
                  px-3 py-2 
                  rounded-md
                  transition-all duration-300">
                        What to Expect
                    </p>

                    <h1 className="text-lg md:text-xl mt-5 mb-8 max-w-3xl mx-auto text-center leading-relaxed">
                        sample...... samples .....
                    </h1>
                </div>

                {/* Carousel */}
                <div className="relative py-3" style={{ perspective: "1500px" }}>
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-6 py-4 overflow-x-auto scrollbar-hide scroll-smooth"
                        style={{ scrollSnapType: "x mandatory", paddingInline: "10vw" }}
                    >
                        <div className="shrink-0 w-[8vw]"></div>

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card shrink-0 w-[72vw] sm:w-[60vw] md:w-[420px] cursor-pointer transition-all duration-500"
                                style={{
                                    transform: index === activeIndex ? "scale(1.06)" : "scale(0.88)",
                                    opacity: index === activeIndex ? 1 : 0.45,
                                    scrollSnapAlign: "center",
                                }}
                                onClick={() => scrollToCard(index)}
                            >
                                <div className="rounded-3xl overflow-hidden bg-[#F3F2EB] border border-[#1F5C46]/20 flex flex-col min-h-[390px]">

                                    {/* TWO IMAGES FIXED + CENTERED */}
                                    <div className="grid grid-cols-2 gap-3 p-3">
                                        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                                            <img
                                                src={project.beforeImage}
                                                className="w-full h-full object-cover"
                                                alt=""
                                            />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
                                            <img
                                                src={project.afterImage}
                                                className="w-full h-full object-cover"
                                                alt=""
                                            />
                                        </div>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="px-4 pb-3">
                                        <h3 className="text-lg font-semibold mb-1">
                                            {project.title}
                                        </h3>

                                        <p className="text-[#1F5C46]/80 text-sm leading-relaxed">
                                            {project.snippet}
                                        </p>

                                        {/* BOTTOM ROW */}
                                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#1F5C46]/30">
                                            <span className="text-[#1F5C46] text-sm">
                                                {project.category}
                                            </span>

                                            <button
                                                onClick={() => navigate(project.link)}
                                                className="text-[#1F5C46] p-2 hover:opacity-70 transition-all"
                                            >
                                                <ArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="shrink-0 w-[8vw]"></div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-4">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToCard(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === activeIndex
                                        ? "bg-[#1F5C46] w-7"
                                        : "bg-[#1F5C46]/40 w-2"
                                }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default HeroCurasol;
