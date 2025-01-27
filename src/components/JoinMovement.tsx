'use client';
import { useState } from 'react';

export default function JoinMovement() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    telephone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/join-movement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for joining the movement!'
      });
      
      // Reset form after successful submission
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        telephone: ''
      });
      
      // Close form after 2 seconds
      setTimeout(() => {
        setShowForm(false);
        setSubmitStatus({ type: null, message: '' });
      }, 2000);

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit form'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="bg-[#E31837] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#c41530] transition-colors"
        >
          Join the Movement
        </button>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-xl w-[350px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#E31837]">Join the Movement</h3>
            <button 
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          
          {submitStatus.type && (
            <div className={`p-3 rounded-md mb-4 ${
              submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                Telephone (Optional)
              </label>
              <input
                type="tel"
                id="telephone"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
                value={formData.telephone}
                onChange={(e) => setFormData({...formData, telephone: e.target.value})}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E31837] text-white px-4 py-2 rounded-md hover:bg-[#c41530] transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Join Now'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
} 