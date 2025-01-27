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
      
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        telephone: ''
      });
      
      setTimeout(() => {
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
    <section className="w-full bg-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-[#E31837] text-3xl md:text-4xl font-bold mb-4 md:mb-8">
          Join the Movement
        </h2>
        <p className="text-center text-gray-700 text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto px-4">
          Join our campaign and help shape the future of our community.
        </p>

        {submitStatus.type && (
          <div className={`text-center mb-6 p-3 rounded-md max-w-3xl mx-auto ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col max-w-md md:max-w-none mx-auto md:flex-row gap-4 md:items-end justify-center">
          <div className="w-full md:flex-1 min-w-0">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>

          <div className="w-full md:flex-1 min-w-0">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>

          <div className="w-full md:flex-1 min-w-0">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="w-full md:flex-1 min-w-0">
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="telephone"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#E31837] focus:border-[#E31837]"
              value={formData.telephone}
              onChange={(e) => setFormData({...formData, telephone: e.target.value})}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-[#E31837] text-white rounded-full hover:bg-[#c41530] transition-colors disabled:opacity-50 whitespace-nowrap text-lg font-semibold shadow-md hover:shadow-lg mt-2 md:mt-0"
          >
            {isSubmitting ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
      </div>
    </section>
  );
} 