import React, { useState } from 'react';
import { Egg, Shield, Sprout, Users, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

declare const process: any;

interface DonateGeneralProps {
  onSuccess: () => void;
}

export const DonateGeneral: React.FC<DonateGeneralProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '', dedication: '' });
  const [loading, setLoading] = useState(false);

  const handlePaystackPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const amountVal = parseFloat(formData.amount);
    if (!formData.name || !formData.email || isNaN(amountVal) || amountVal < 500) {
      alert("Please fill in your Name, Email and a valid donation amount (minimum 500).");
      return;
    }

    setLoading(true);

    const startPaystack = (key: string) => {
      // @ts-ignore
      const handler = window.PaystackPop.setup({
        key: key,
        email: formData.email,
        amount: amountVal * 100, // in kobo
        currency: 'NGN',
        metadata: {
          custom_fields: [
            { display_name: "Donor Name", variable_name: "donor_name", value: formData.name },
            { display_name: "Dedication", variable_name: "dedication", value: formData.dedication }
          ]
        },
        callback: function() {
          onSuccess();
          setFormData({ name: '', email: '', amount: '', dedication: '' });
        },
        onClose: function() {
          alert("Transaction cancelled.");
        }
      });
      handler.openIframe();
    };

    const paystackKey = process.env.PAYSTACK_PUBLIC_KEY;
    if (!paystackKey) {
      alert("Payment gateway key is not configured. Please set PAYSTACK_PUBLIC_KEY in your environment variables.");
      return;
    }
    startPaystack(paystackKey);
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ background: '#f4f8f5', padding: '140px 10% 80px', color: 'var(--text)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>Give Today</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
            Every Gift Plants a Seed
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '650px', lineHeight: 1.7 }}>
            Your donation directly funds livestock, seeds, training, and opportunities for Nigeria's most vulnerable. No gift is too small to change a life.
          </p>
        </motion.div>
      </div>

      <section style={{ background: 'white', padding: '90px 10%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }} className="responsive-grid-split-serve">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '32px', fontWeight: 800, color: 'var(--sky-dark)' }}>
              What Your Donation Buys
            </h2>
            <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '30px' }}>
              Ikore Empowerment Foundation is a registered non-profit. All general donations directly fund our grassroots programmes, training, crop-farming biofortification seeds, and veterinarian support for smallholder families across Nigeria.
            </p>

            <div style={{ display: 'grid', gap: '16px' }}>
              <div style={{ background: '#f4f8f5', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Egg style={{ color: 'var(--sky)' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>5,000 / $4</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Provides a day-old chick and starter feed for one woman</div>
                </div>
              </div>

              <div style={{ background: '#f4f8f5', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield style={{ color: 'var(--sky)' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>55,000 / $40</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Funds a starter goat and 3 months of veterinary support</div>
                </div>
              </div>

              <div style={{ background: '#f4f8f5', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sprout style={{ color: 'var(--sky)' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>50,000 / $37</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Seeds, tools, and a full season of training for one farmer</div>
                </div>
              </div>

              <div style={{ background: '#f4f8f5', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: 'white', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users style={{ color: 'var(--gold)' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>250,000 / $180</div>
                  <div style={{ color: 'var(--text-light)', fontSize: '14px' }}>Sponsors a complete household transformation package</div>
                </div>
              </div>

              <div style={{ background: 'var(--sky)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', color: 'white' }}>
                <div style={{ background: 'rgba(255,255,255,0.2)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Landmark style={{ color: 'white' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '16px', color: 'white', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>1,000,000+ / $730+</div>
                  <div style={{ fontSize: '14px', opacity: 0.9 }}>Fund an entire community programme for one quarter</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ background: '#f4f8f5', borderRadius: '24px', padding: '40px' }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 800, marginBottom: '24px', color: 'var(--sky-dark)' }}>
                Make a Donation
              </h3>
              <form onSubmit={handlePaystackPayment}>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Donation Amount (NGN)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Enter amount" 
                    min="500" 
                    required 
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, marginBottom: '6px', color: 'var(--text)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Dedication (Optional)
                  </label>
                  <input 
                    type="text" 
                    placeholder="In honour of..." 
                    value={formData.dedication}
                    onChange={(e) => setFormData({ ...formData, dedication: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #dcdcdc', fontSize: '14px', outline: 'none', background: 'white', color: 'var(--text)', boxSizing: 'border-box' }}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading} 
                  style={{ width: '100%', background: 'var(--sky)', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', cursor: 'pointer', transition: 'background 0.2s' }}
                >
                  {loading ? 'Processing...' : 'Donate Now'}
                </button>
              </form>
              <p style={{ fontSize: '12px', color: 'var(--text-light)', textAlign: 'center', marginTop: '16px', lineHeight: 1.5, margin: '16px 0 0' }}>
                The Ikore Foundation is a registered non-profit. All donations are used directly for programme delivery. Secured and encrypted.
              </p>
            </div>

            {/* Direct Bank Transfer Details */}
            <div style={{ marginTop: '24px', background: 'var(--sky-dark)', borderRadius: '24px', padding: '30px', color: 'white' }}>
              <div style={{ fontWeight: 800, marginBottom: '16px', fontSize: '18px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Direct Bank Transfer Details
              </div>
              <div style={{ fontSize: '14.5px', opacity: 0.95, lineHeight: 1.8 }}>
                <strong style={{ color: '#ffc83b' }}>Account Name:</strong> Ikore Empowerment Foundation<br />
                <strong style={{ color: '#ffc83b' }}>Bank:</strong> UBA Plc<br />
                <hr style={{ border: 0, borderTop: '1px solid rgba(255,255,255,0.15)', margin: '12px 0' }} />
                <strong style={{ color: '#ffc83b' }}>NGN Account:</strong> 1026952676 (NGN)<br />
                <strong style={{ color: '#ffc83b' }}>USD Account:</strong> 3004365012 (USD)
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
