import {Header} from "@/app/components/Header";
import {SearchBar} from "@/app/components/Input";
import {HeroBanner} from "@/app/components/HeroBanner";
import {FilterChips} from "@/app/components/FilterChips";
import {EventSection} from "@/app/components/EventSection";

export default function Home(){
    const recentlyViewed = [
        {
            title: "Travis Scott",
            popularity: "13.9K",
            gradient: "from-purple-600 to-pink-600",
            icon: "🎤"
        },
        {
            title: "Philadelphia Eagles",
            popularity: "38K",
            gradient: "from-green-700 to-teal-600",
            icon: "🏈"
        },
        {
            title: "NBA Youngboy",
            popularity: "3.6K",
            gradient: "from-blue-600 to-purple-600",
            icon: "🎵"
        },
        {
            title: "Miami Hurricanes Football",
            popularity: "1.2K",
            gradient: "from-orange-600 to-red-600",
            icon: "🏈"
        }
    ];

    const recommended = [
        {
            title: "New York Giants",
            date: "27 Sep - Jan 04, 2026",
            events: "8 events near you",
            popularity: "23.8K",
            gradient: "from-blue-800 to-red-600",
            icon: "🏈"
        },
        {
            title: "Tate McRae",
            date: "Sat, 18 Oct • 23:30",
            events: "1 event near you",
            popularity: "15K",
            gradient: "from-blue-400 to-purple-500",
            icon: "🎤"
        },
        {
            title: "New York Yankees",
            date: "23 Sep - Sep 27, 2026",
            events: "104 events near you",
            popularity: "67.7K",
            gradient: "from-gray-700 to-blue-600",
            icon: "⚾"
        },
        {
            title: "NBA Youngboy",
            date: "27 Sep - 29 Sep",
            events: "2 events near you",
            popularity: "3.6K",
            gradient: "from-purple-600 to-blue-600",
            icon: "🎵"
        }
    ];

    return (
        <div className="min-h-screen bg-[#E8DFCA]">
            <Header />

            <main className="container mx-auto px-8 py-8">
                {/* Search Section */}
                <div className="mb-12">
                    <SearchBar />
                </div>

                {/* Hero Banner */}
                <div className="mb-12">
                    <HeroBanner />
                </div>

                {/* Filters */}
                <FilterChips />

                {/* Recently Viewed */}
                <EventSection
                    title="Recently viewed"
                    events={recentlyViewed}
                    showEdit={true}
                />

                {/* Recommended */}
                <EventSection
                    title="Recommended for you"
                    events={recommended}
                />
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="container mx-auto px-8">
                    <div className="text-center">
                        <p className="mb-2">We&#39;re the world&#39;s largest secondary marketplace for tickets to live events.</p>
                        <p className="text-sm text-gray-400">Prices are set by sellers and may be below or above face value.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};