import React, { useState } from 'react';

const DataDeletion = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Handle the data deletion request logic
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Reason:', reason);

        // After successful submission, show confirmation message
        setIsSubmitted(true);

        // Example: Send data to backend (if you have a backend API)
        // axios.post('/api/deletion', { name, email, reason });
    };

    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center p-4 space-y-4">
                <h2 className="text-2xl font-semibold text-green-600">Thank you for your request!</h2>
                <p className="text-lg text-gray-700">We have received your data deletion request. You will be contacted soon.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold text-center mb-6">Request Data Deletion</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-lg font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="reason" className="text-lg font-medium text-gray-700">Reason for Deletion (Optional)</label>
                    <textarea
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        rows={4}
                        className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 mt-4 bg-[#00bba3] text-white font-semibold rounded-lg shadow-md hover:bg-[#007c6c] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default DataDeletion;
