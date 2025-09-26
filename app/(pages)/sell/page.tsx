'use client'
import React, {useState} from "react";
import {Shield, TrendingUp, Users} from "lucide-react";
import {ProgressSteps} from "@/app/(pages)/sell/components/Steps";
import {EventSearch} from "@/app/(pages)/sell/components/SearchBar";
import {TicketDetailsForm} from "@/app/(pages)/sell/components/Form";
import {PricingForm} from "@/app/(pages)/sell/components/Pricing";
import {ReviewListing} from "@/app/(pages)/sell/components/Review";
import {SuccessModal} from "@/app/(pages)/sell/components/SuccessModal";


export default function SellTicketsPage () {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [ticketDetails, setTicketDetails] = useState({
        section: "",
        row: "",
        seats: "",
        quantity: 2,
        type: "digital",
        notes: ""
    });
    const [pricing, setPricing] = useState({
        price: 0,
        quantity: 2,
        instantSell: true,
        acceptOffers: false
    });
    const [showSuccess, setShowSuccess] = useState(false);

    const marketData = {
        avgPrice: 4156,
        lowestPrice: 1618,
        highestPrice: 9674
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
        if (event) {
            setCurrentStep(2);
        }
    };

    const handleSubmit = () => {
        setShowSuccess(true);
    };

    // Sync quantity between ticket details and pricing
    React.useEffect(() => {
        setPricing(prev => ({ ...prev, quantity: ticketDetails.quantity }));
    }, [ticketDetails.quantity]);

    return (
        <div className="min-h-screen bg-gray-50">

            <main className="container mx-auto px-8 py-8">
                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Sell Your Tickets</h1>
                    <p className="text-xl text-gray-600">
                        List your tickets on TicketHub and reach thousands of potential buyers
                    </p>
                </div>

                {/* Progress Steps */}
                <ProgressSteps currentStep={currentStep} />

                {/* Step Content */}
                {currentStep === 1 && (
                    <EventSearch
                        selectedEvent={selectedEvent}
                        onEventSelect={handleEventSelect}
                    />
                )}

                {currentStep === 2 && selectedEvent && (
                    <>
                        <EventSearch
                            selectedEvent={selectedEvent}
                            onEventSelect={handleEventSelect}
                        />
                        <TicketDetailsForm
                            ticketDetails={ticketDetails}
                            onDetailsChange={setTicketDetails}
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={() => setCurrentStep(1)}
                                className="px-8 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={!ticketDetails.section}
                                className={`px-8 py-3 rounded-xl font-medium transition-colors ${
                                    ticketDetails.section
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Continue to Pricing
                            </button>
                        </div>
                    </>
                )}

                {currentStep === 3 && selectedEvent && (
                    <>
                        <EventSearch
                            selectedEvent={selectedEvent}
                            onEventSelect={handleEventSelect}
                        />
                        <PricingForm
                            pricing={pricing}
                            onPricingChange={setPricing}
                            marketData={marketData}
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={() => setCurrentStep(2)}
                                className="px-8 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={pricing.price <= 0}
                                className={`px-8 py-3 rounded-xl font-medium transition-colors ${
                                    pricing.price > 0
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Review Listing
                            </button>
                        </div>
                    </>
                )}

                {currentStep === 4 && selectedEvent && (
                    <>
                        <ReviewListing
                            selectedEvent={selectedEvent}
                            ticketDetails={ticketDetails}
                            pricing={pricing}
                            onSubmit={handleSubmit}
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={() => setCurrentStep(3)}
                                className="px-8 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                            >
                                Back to Pricing
                            </button>
                        </div>
                    </>
                )}

                {/* Help Section */}
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
                        <p className="text-gray-600 mb-6">
                            Our seller support team is here to help you get the most out of your ticket sales
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all">
                                Chat with Support
                            </button>
                            <button className="border border-blue-200 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-white transition-colors">
                                View Seller Guide
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="text-blue-600" size={24} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Secure Transactions</h3>
                            <p className="text-gray-600 text-sm">
                                All payments are protected and processed securely through our platform
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="text-green-600" size={24} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Maximum Exposure</h3>
                            <p className="text-gray-600 text-sm">
                                Your listings reach thousands of verified buyers looking for tickets
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-purple-600" size={24} />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">24/7 Support</h3>
                            <p className="text-gray-600 text-sm">
                                Get help whenever you need it from our dedicated support team
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Success Modal */}
            <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
        </div>
    );
};
