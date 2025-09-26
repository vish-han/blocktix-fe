import {CheckCircle} from "lucide-react";

export const SuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tickets Listed Successfully!</h2>
                <p className="text-gray-600 mb-6">
                    Your tickets are now live on TicketHub. You'll receive notifications when buyers show interest.
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                    >
                        View My Listings
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                        List More Tickets
                    </button>
                </div>
            </div>
        </div>
    );
};
