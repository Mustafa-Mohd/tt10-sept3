import { useState } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // You'll get this from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // You'll get this from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // You'll get this from EmailJS dashboard

export const useEmailService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendSubscriptionEmail = async (subscriberData: {
    name: string;
    email: string;
  }) => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Template parameters
      const templateParams = {
        to_email: 'murtaja728@gmail.com',
        subscriber_name: subscriberData.name,
        subscriber_email: subscriberData.email,
        subscription_date: new Date().toLocaleDateString(),
        subscription_time: new Date().toLocaleTimeString(),
        message: `New subscription from ${subscriberData.name} (${subscriberData.email})`,
      };

      // Send email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setIsSuccess(true);
        console.log('Subscription email sent successfully!');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('Error sending subscription email:', err);
      setError(err instanceof Error ? err.message : 'Failed to send email');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendSubscriptionEmail,
    isLoading,
    isSuccess,
    error,
  };
};
