import {Breadcrumb} from "@/app/(pages)/event/components/Breadcrums";
import {EventHero} from "@/app/(pages)/event/components/EventHero";
import {TicketFilters} from "@/app/(pages)/event/components/Filter";
import {TicketCard} from "@/app/(pages)/event/components/TicketCard";
import {EventInformation} from "@/app/(pages)/event/components/EventInfo";
export default  function  EventDetailsPage (){
    const event = {
        title: "Flip Circus",
        date: "Today • 21 Sep • Sun • 13:00 • 2025",
        time: "1:00 PM",
        venue: "Palisades Center, West Nyack",
        address: "1000 Palisades Center Dr, West Nyack, NY 10994, USA"
    };

    const tickets = [
        {
            section: "General Admission",
            quantity: 2,
            price: 1618,
            originalPrice: 3221,
            badge: "Great",
            details: null,
            remaining: null
        },
        {
            section: "General Admission",
            quantity: 2,
            price: 1716,
            originalPrice: 2428,
            badge: null,
            details: null,
            remaining: null
        },
        {
            section: "BB",
            quantity: 2,
            price: 9674,
            originalPrice: null,
            badge: null,
            details: "Row J | Seats 100 - 103",
            remaining: "4"
        },
        {
            section: "DD",
            quantity: 2,
            price: 9674,
            originalPrice: null,
            badge: null,
            details: "Row J | Seats 100 - 103",
            remaining: "4"
        }
    ];

    return (
        <div className="min-h-screen bg-[#E8DFCA]">
            <main className="container mx-auto px-8 py-8">
                <Breadcrumb eventName={event.title} />

                <EventHero event={event} />

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <TicketFilters />

                        <div className="space-y-6">
                            {tickets.map((ticket, index) => (
                                <TicketCard key={index} ticket={ticket} />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <EventInformation event={event} />

                        {/* Quick Stats */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Quick Stats</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Average Price</span>
                                    <span className="font-bold">INR 4,156</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Cheapest Price</span>
                                    <span className="font-bold text-green-600">INR 1,618</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Most Expensive</span>
                                    <span className="font-bold">INR 9,674</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Listings</span>
                                    <span className="font-bold">4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
