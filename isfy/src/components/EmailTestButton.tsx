import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { sendNewsletterSubscription } from '@/services/emailService';

const EmailTestButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<'success' | 'error' | null>(null);

  const testEmailNotification = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const testData = {
        name: 'Test Subscriber',
        email: 'test@example.com',
        timestamp: new Date().toLocaleString()
      };

      const success = await sendNewsletterSubscription(testData);
      
      if (success) {
        setResult('success');
      } else {
        setResult('error');
      }
    } catch (error) {
      console.error('Test failed:', error);
      setResult('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Mail className="w-5 h-5 mr-2 text-blue-500" />
        Test Email Notification
      </h3>
      
      <p className="text-gray-600 mb-4">
        Click the button below to test the email notification system. This will send a test notification to <strong>murtaja728@gmail.com</strong>.
      </p>
      
      <button
        onClick={testEmailNotification}
        disabled={isLoading}
        className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
          isLoading
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg'
        }`}
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending Test...
          </>
        ) : (
          <>
            <Mail className="w-4 h-4 mr-2" />
            Send Test Email
          </>
        )}
      </button>
      
      {result === 'success' && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
          <span className="text-green-700">
            ✅ Test email sent successfully! Check your email at murtaja728@gmail.com
          </span>
        </div>
      )}
      
      {result === 'error' && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">
            ❌ Test failed. Check the console for details.
          </span>
        </div>
      )}
    </div>
  );
};

export default EmailTestButton;
