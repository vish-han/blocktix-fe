import {User} from "lucide-react";

export const Header = () => {
    return (
        <nav className="flex w-full bg-[#F5EFE6] backdrop-blur-sm justify-between items-center px-8 py-4 shadow-sm border-b border-gray-100">
            <div className="flex gap-8 items-center">
                <h1 className="font-bold text-3xl text-gray-900">TicketHub</h1>
                <div className="hidden md:flex gap-6">
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sports</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Concerts</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Theater</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Top Cities</a>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Explore</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Sell</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">My Tickets</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <User size={16} />
                    Sign In
                </button>
            </div>
        </nav>
    );
};