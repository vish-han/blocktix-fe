'use client'
import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";

export const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Philadelphia Eagles",
            subtitle: "NFL Football Season",
            image: "linear-gradient(135deg, #0F4A3C 0%, #2A6B5C 50%, #6D94C5 100%)",
            icon: "🏈"
        },
        {
            title: "Travis Scott",
            subtitle: "World Tour 2024",
            image: "linear-gradient(135deg, #2A3B5C 0%, #465C88 50%, #6D94C5 100%)",
            icon: "🎤"
        },
        {
            title: "NBA Finals",
            subtitle: "Championship Series",
            image: "linear-gradient(135deg, #6D94C5 0%, #CBD6EB 50%, #E8DFCA 100%)",
            icon: "🏀"
        }
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
            <div
                className="w-full h-full flex items-center justify-between p-12 text-white relative"
                style={{ background: slides[currentSlide].image }}
            >
                <div className="flex-1">
                    <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
                    <h2 className="text-5xl font-bold mb-2">{slides[currentSlide].title}</h2>
                    <p className="text-xl mb-6 opacity-90">{slides[currentSlide].subtitle}</p>
                    <Link href={"/event/202"}>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                        See Tickets
                    </button>
                </Link>
                </div>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all ${
                                index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft className="text-white" size={24} />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                    <ChevronRight className="text-white" size={24} />
                </button>
            </div>
        </div>
    );
};
