import {useState} from "react";
import {Camera, Minus, Plus} from "lucide-react";

export const TicketDetailsForm = ({ ticketDetails, onDetailsChange }) => {
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        // In real implementation, you'd upload these files
        setUploadedImages(prev => [...prev, ...files.map(file => file.name)]);
    };

    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ticket Details</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Section/Area *
                        </label>
                        <input
                            type="text"
                            placeholder="e.g., General Admission, Section A, VIP"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                            value={ticketDetails.section}
                            onChange={(e) => onDetailsChange({...ticketDetails, section: e.target.value})}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Row (if applicable)
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., Row J"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                                value={ticketDetails.row}
                                onChange={(e) => onDetailsChange({...ticketDetails, row: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Seat Numbers
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., 100-103"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                                value={ticketDetails.seats}
                                onChange={(e) => onDetailsChange({...ticketDetails, seats: e.target.value})}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Tickets *
                        </label>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => onDetailsChange({...ticketDetails, quantity: Math.max(1, ticketDetails.quantity - 1)})}
                                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="text-2xl font-bold w-8 text-center">{ticketDetails.quantity}</span>
                            <button
                                onClick={() => onDetailsChange({...ticketDetails, quantity: ticketDetails.quantity + 1})}
                                className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Ticket Type
                        </label>
                        <select
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                            value={ticketDetails.type}
                            onChange={(e) => onDetailsChange({...ticketDetails, type: e.target.value})}
                        >
                            <option value="physical">Physical Tickets</option>
                            <option value="digital">Digital/Mobile Tickets</option>
                            <option value="print">Print-at-Home</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Ticket Images
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                id="ticket-upload"
                            />
                            <label htmlFor="ticket-upload" className="cursor-pointer">
                                <Camera size={48} className="mx-auto mb-4 text-gray-400" />
                                <p className="text-gray-600 mb-2">Upload photos of your tickets</p>
                                <p className="text-sm text-gray-500">Helps buyers trust your listing</p>
                            </label>
                        </div>
                        {uploadedImages.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm text-green-600">{uploadedImages.length} image(s) uploaded</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Notes
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Any special instructions or notes for buyers..."
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none resize-none"
                            value={ticketDetails.notes}
                            onChange={(e) => onDetailsChange({...ticketDetails, notes: e.target.value})}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
