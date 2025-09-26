import {useState} from "react";
import {CheckCircle, FileText, Shield} from "lucide-react";

export const ReviewListing = ({ selectedEvent, ticketDetails, pricing, onSubmit }) => {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Your Listing</h2>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Listing Preview */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Listing Preview</h3>
                    <div className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${selectedEvent.gradient} flex items-center justify-center text-2xl`}>
                                {selectedEvent.image}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{selectedEvent.title}</h4>
                                <p className="text-gray-600">{selectedEvent.date} • {selectedEvent.venue}</p>
                            </div>
                        </div>

                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Section:</span>
                                <span className="font-medium">{ticketDetails.section}</span>
                            </div>
                            {ticketDetails.row && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Row:</span>
                                    <span className="font-medium">{ticketDetails.row}</span>
                                </div>
                            )}
                            {ticketDetails.seats && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Seats:</span>
                                    <span className="font-medium">{ticketDetails.seats}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span className="text-gray-600">Quantity:</span>
                                <span className="font-medium">{ticketDetails.quantity} tickets</span>
                            </div>
                        </div>

                        <div className="border-t pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold">Price per ticket:</span>
                                <span className="text-2xl font-bold text-blue-600">INR {pricing.price.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terms and Submit */}
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Terms & Conditions</h3>
                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                            <Shield className="text-green-600 mt-1" size={16} />
                            <div className="text-sm text-gray-700">
                                <p className="font-medium">Seller Protection</p>
                                <p>Your tickets are protected against fraudulent chargebacks</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <FileText className="text-blue-600 mt-1" size={16} />
                            <div className="text-sm text-gray-700">
                                <p className="font-medium">Transfer Requirements</p>
                                <p>Tickets must be transferred within 24 hours of sale</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <CheckCircle className="text-green-600 mt-1" size={16} />
                            <div className="text-sm text-gray-700">
                                <p className="font-medium">Guaranteed Payment</p>
                                <p>Payment processed within 1-2 business days after event</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={(e) => setAgreed(e.target.checked)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 mt-1"
                            />
                            <div className="text-sm text-gray-700">
                                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and
                                <a href="#" className="text-blue-600 hover:underline"> Seller Agreement</a>.
                                I confirm that I own these tickets and have the right to sell them.
                            </div>
                        </label>
                    </div>

                    <button
                        onClick={onSubmit}
                        disabled={!agreed}
                        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                            agreed
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                        List My Tickets
                    </button>
                </div>
            </div>
        </div>
    );
};