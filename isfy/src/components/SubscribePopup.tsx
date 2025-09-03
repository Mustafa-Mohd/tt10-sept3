import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { sendNewsletterSubscription } from '@/services/emailService';

interface SubscribePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribePopup = ({ isOpen, onClose }: SubscribePopupProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Use the new email service that tries multiple methods
      const success = await sendNewsletterSubscription({
        name,
        email,
        timestamp: new Date().toLocaleString()
      });

      if (success) {
        setIsSuccess(true);
        // Reset form after 2 seconds
        setTimeout(() => {
          setName('');
          setEmail('');
          setIsSuccess(false);
          onClose();
        }, 2000);
      } else {
        throw new Error('Failed to send subscription notification');
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setError(null);
    setIsSuccess(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Make card relative so close button sits inside */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Close Button - now inside card */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors duration-200 z-20"
        >
          <X className="h-6 w-6 text-slate-600" />
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Name/Logo with Image */}
          <div className="lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/drdotym31/image/upload/v1753445758/WhatsApp_Image_2024-08-08_at_14.59.56_h8j6sb_xhgika.jpg')`
              }}
            />
            
            {/* Content overlay */}
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-playfair">
                Ishrat Fayaz
              </h2>
              <p className="text-lg text-slate-300 mb-6 font-cormorant leading-relaxed">
                Join me on a journey through words, stories, and the mystical landscapes of Kashmir.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-cormorant">Exclusive content and updates</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-cormorant">Behind-the-scenes insights</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="font-cormorant">Early access to new releases</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Subscription Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-slate-900">
                Stay Connected
              </h3>
              <p className="text-slate-600 mb-8 font-cormorant">
                Subscribe to receive updates about my latest works, events, and literary journey.
              </p>

              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-600 mb-2">Successfully Subscribed!</h3>
                  <p className="text-slate-600">Thank you for joining our community. You'll receive updates soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent font-cormorant text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent font-cormorant text-base"
                      required
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-cormorant text-base transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
              )}

              <p className="text-xs text-slate-500 mt-4 font-cormorant">
                By subscribing, you agree to receive updates from Ishrat Fayaz. 
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribePopup;
