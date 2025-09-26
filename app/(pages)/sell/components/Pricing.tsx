import {DollarSign, Info, TrendingUp} from "lucide-react";

export const PricingForm = ({ pricing, onPricingChange, marketData }) => {
    const totalEarnings = (pricing.price * pricing.quantity) - (pricing.price * pricing.quantity * 0.15);

    return (
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Pricing Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Set Your Price</h2>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price per ticket (INR) *
                        </label>
                        <div className="relative">
                            <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-xl font-bold focus:border-blue-500 focus:outline-none"
                                value={pricing.price}
                                onChange={(e) => onPricingChange({...pricing, price: parseInt(e.target.value) || 0})}
                            />
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                            <TrendingUp size={16} />
                            Market Insights
                        </div>
                        <div className="text-sm text-blue-600 space-y-1">
                            <p>Average market price: INR {marketData.avgPrice.toLocaleString()}</p>
                            <p>Lowest current listing: INR {marketData.lowestPrice.toLocaleString()}</p>
                            <p>Highest sold: INR {marketData.highestPrice.toLocaleString()}</p>
                        </div>
                    </div>

                    <div>
                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={pricing.instantSell}
                                onChange={(e) => onPricingChange({...pricing, instantSell: e.target.checked})}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <div>
                                <div className="font-medium text-gray-900">Enable Instant Sell</div>
                                <div className="text-sm text-gray-600">Buyers can purchase immediately without negotiation</div>
                            </div>
                        </label>
                    </div>

                    <div>
                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={pricing.acceptOffers}
                                onChange={(e) => onPricingChange({...pricing, acceptOffers: e.target.checked})}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <div>
                                <div className="font-medium text-gray-900">Accept Offers</div>
                                <div className="text-sm text-gray-600">Allow buyers to make offers below your asking price</div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Earnings Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Earnings Breakdown</h3>

                <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">Ticket price × {pricing.quantity}</span>
                        <span className="font-bold">INR {(pricing.price * pricing.quantity).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600">TicketHub fees (15%)</span>
                        <span className="font-bold text-red-600">-INR {(pricing.price * pricing.quantity * 0.15).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center py-4 bg-green-50 px-4 rounded-xl">
                        <span className="text-lg font-bold text-gray-900">You&#39;ll receive</span>
                        <span className="text-2xl font-bold text-green-600">INR {totalEarnings.toLocaleString()}</span>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                        <div className="flex items-start gap-3">
                            <Info className="text-yellow-600 mt-1" size={16} />
                            <div className="text-sm text-yellow-700">
                                <p className="font-medium mb-1">Payment Information</p>
                                <p>Payments are processed within 1-2 business days after the event. Make sure your payment details are up to date.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
