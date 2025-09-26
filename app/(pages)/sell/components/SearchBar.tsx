'use clients'
import {useState} from "react";
import {Calendar, MapPin, Search, X} from "lucide-react";

export const EventSearch = ({ selectedEvent, onEventSelect }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showResults, setShowResults] = useState(false);

    const mockEvents = [
        {
            id: 1,
            title: "Flip Circus",
            date: "Sep 21, 2025",
            time: "1:00 PM",
            venue: "Palisades Center, West Nyack",
            image: "🎪",
            gradient: "from-purple-600 to-pink-600",
            avgPrice: 4156
        },
        {
            id: 2,
            title: "Travis Scott - World Tour",
            date: "Oct 15, 2025",
            time: "8:00 PM",
            venue: "Madison Square Garden",
            image: "🎤",
            gradient: "from-purple-800 to-blue-600",
            avgPrice: 8500
        },
        {
            id: 3,
            title: "Philadelphia Eagles vs Cowboys",
            date: "Nov 3, 2025",
            time: "4:25 PM",
            venue: "Lincoln Financial Field",
            image: "🏈",
            gradient: "from-green-700 to-teal-600",
            avgPrice: 12000
        },
        {
            id: 4,
            title: "NBA Finals Game 4",
            date: "Jun 12, 2025",
            time: "9:00 PM",
            venue: "Barclays Center",
            image: "🏀",
            gradient: "from-orange-600 to-red-600",
            avgPrice: 25000
        }
    ];

    const filteredEvents = mockEvents.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Event</h2>

            {!selectedEvent ? (
                <div className="relative">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search for events, artists, teams, or venues..."
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-500 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setShowResults(true);
                            }}
                            onFocus={() => setShowResults(true)}
                        />
                    </div>

                    {showResults && searchTerm && (
                        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-96 overflow-y-auto">
                            {filteredEvents.length > 0 ? (
                                filteredEvents.map(event => (
                                    <div
                                        key={event.id}
                                        className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                        onClick={() => {
                                            onEventSelect(event);
                                            setShowResults(false);
                                            setSearchTerm("");
                                        }}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${event.gradient} flex items-center justify-center text-2xl`}>
                                                {event.image}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-gray-900">{event.title}</h3>
                                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar size={14} />
                                                        {event.date} • {event.time}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin size={14} />
                                                        {event.venue}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-blue-600 font-medium mt-1">
                                                    Avg. price: INR {event.avgPrice.toLocaleString()}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-8 text-center text-gray-500">
                                    <Search size={48} className="mx-auto mb-4 text-gray-300" />
                                    <p>No events found matching your search.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div className="border-2 border-green-200 bg-green-50 rounded-xl p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${selectedEvent.gradient} flex items-center justify-center text-3xl`}>
                                {selectedEvent.image}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{selectedEvent.title}</h3>
                                <div className="flex items-center gap-4 text-gray-600 mt-2">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={16} />
                                        {selectedEvent.date} • {selectedEvent.time}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        {selectedEvent.venue}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => onEventSelect(null)}
                            className="p-2 hover:bg-white rounded-lg transition-colors"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};