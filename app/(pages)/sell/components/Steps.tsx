import {CheckCircle} from "lucide-react";

export const ProgressSteps = ({ currentStep }) => {
    const steps = [
        { number: 1, title: "Select Event", completed: currentStep > 1, active: currentStep === 1 },
        { number: 2, title: "Ticket Details", completed: currentStep > 2, active: currentStep === 2 },
        { number: 3, title: "Set Price", completed: currentStep > 3, active: currentStep === 3 },
        { number: 4, title: "Review & List", completed: currentStep > 4, active: currentStep === 4 }
    ];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                    <div key={step.number} className="flex items-center">
                        <div className="flex items-center">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                                step.completed
                                    ? 'bg-green-500 text-white'
                                    : step.active
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-600'
                            }`}>
                                {step.completed ? <CheckCircle size={20} /> : step.number}
                            </div>
                            <div className="ml-3">
                                <div className={`font-medium ${step.active ? 'text-blue-600' : step.completed ? 'text-green-600' : 'text-gray-600'}`}>
                                    {step.title}
                                </div>
                            </div>
                        </div>
                        {index < steps.length - 1 && (
                            <div className={`w-16 h-1 mx-4 ${step.completed ? 'bg-green-500' : 'bg-gray-200'}`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};