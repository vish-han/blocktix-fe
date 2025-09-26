'use client'
import {useState} from "react";
import {Calendar, Heart, Users} from "lucide-react";


export const EventCard = ({ event, size = 'normal' }) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className={`relative group cursor-pointer ${size === 'large' ? 'col-span-2' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div
                    className={`${size === 'large' ? 'h-64' : 'h-48'} bg-gradient-to-br ${event.gradient} flex items-center justify-center`}
                >
                    <div className="text-center text-white">
                        <div className="text-4xl mb-2">{event.icon}</div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                    </div>
                </div>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsLiked(!isLiked);
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                    <Heart
                        size={20}
                        className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-white'} transition-colors`}
                    />
                </button>

                <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {event.popularity}
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{event.title}</h3>
                {event.date && (
                    <div className="flex items-center text-gray-600 text-sm mb-1">
                        <Calendar size={14} className="mr-1" />
                        {event.date}
                    </div>
                )}
                {event.events && (
                    <div className="flex items-center text-gray-600 text-sm">
                        <Users size={14} className="mr-1" />
                        {event.events}
                    </div>
                )}
            </div>
        </div>
    );
};