import React, { useState, useEffect } from 'react';
import { Activity, Shield, Landmark, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface DonateTAGProps {
  onSuccess: () => void;
}

export const DonateTAG: React.FC<DonateTAGProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', amount: '', dedication: '' });
  const [loading, setLoading] = useState(false);
  
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const targetCampaignDate = new Date("September 30, 2026 23:59:59").getTime();

  useEffect(() => {
    const updateCampaignTimer = () => {
      const now = new Date().getTime();
      const difference = targetCampaignDate - now;

      if (difference < 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    updateCampaignTimer();
    const interval = setInterval(updateCampaignTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const selectImpact = (amount: number) => {
    setFormData({ ...formData, amount: String(amount) });
    document.getElementById("paystackForm")?.scrollIntoView({ behavior: 'smooth' });
  };

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

    fetch('/api/paystack-key')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch payment gateway configuration");
        return res.json();
      })
      .then(data => {
        setLoading(false);
        const paystackKey = data.publicKey;
        if (!paystackKey) {
          throw new Error("Payment gateway key is not configured on the server");
        }
        startPaystack(paystackKey);
      })
      .catch(err => {
        setLoading(false);
        console.error(err);
        alert("An error occurred initializing payment: " + err.message);
      });
  };

  return (
    <div>
      {/* Header Banner */}
      <div style={{ background: '#f4f8f5', padding: '140px 10% 80px', color: 'var(--text)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label" style={{ color: 'var(--sky-dark)' }}>TAG Initiative Campaign</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)', textAlign: 'center' }}>
            Help a Woman Earn Again
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 30px', lineHeight: 1.75, textAlign: 'center' }}>
            Today, you have the opportunity to do something extraordinary. Not by giving temporary relief. But by helping a conflict-affected woman regain the ability to provide for herself and the people she loves. Your generosity equips women with the assets they need to rebuild sustainable livelihoods, earn an income, and create lasting economic security for their families.
          </p>
          <p style={{ fontSize: '17px', fontWeight: 700, color: 'var(--sky-dark)', textAlign: 'center', margin: 0 }}>
            This is more than a donation. It's an investment in resilience, dignity, and opportunity. Give today.
          </p>
        </motion.div>
      </div>

      <section style={{ background: 'white', padding: '90px 10%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'start' }} className="responsive-grid-split-partner">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Campaign Countdown */}
            <div style={{ background: '#f4f8f5', borderRadius: '24px', padding: '36px', marginBottom: '40px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '20px', fontWeight: 800, marginBottom: '20px', color: 'var(--sky-dark)' }}>
                Campaign Countdown
              </h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
                <div style={{ background: 'white', padding: '16px 20px', borderRadius: '16px', minWidth: '80px' }}>
                  <span style={{ display: 'block', fontSize: '36px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{timeLeft.days}</span>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 600 }}>Days</span>
                </div>
                <div style={{ background: 'white', padding: '16px 20px', borderRadius: '16px', minWidth: '80px' }}>
                  <span style={{ display: 'block', fontSize: '36px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{timeLeft.hours}</span>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 600 }}>Hours</span>
                </div>
                <div style={{ background: 'white', padding: '16px 20px', borderRadius: '16px', minWidth: '80px' }}>
                  <span style={{ display: 'block', fontSize: '36px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{timeLeft.minutes}</span>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 600 }}>Minutes</span>
                </div>
                <div style={{ background: 'white', padding: '16px 20px', borderRadius: '16px', minWidth: '80px' }}>
                  <span style={{ display: 'block', fontSize: '36px', fontWeight: 800, color: 'var(--sky)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{timeLeft.seconds}</span>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-light)', fontWeight: 600 }}>Seconds</span>
                </div>
              </div>
            </div>

            {/* About the TAG Initiative */}
            <div style={{ background: 'white', marginBottom: '50px' }}>
              <h2 className="section-title" style={{ fontSize: '26px', marginBottom: '16px', color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                About the TAG Initiative Fundraising Campaign
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
                Under the Market Recovery and Livelihood programme, the fundraiser aims to raise support to help conflict-affected women rebuild their lives through sustainable livestock enterprises. Many women in conflict-affected communities have lost their homes, livelihoods, and productive assets, leaving them with few opportunities to earn an income and provide for their families. Rather than offering short-term relief, this fundraiser invests in a long-term solution that equips women with the resources and skills to achieve economic independence.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '20px' }}>
                Through the Take and Give (TAG) model, every woman supported by the fundraiser receives a pair of goats (one male and one female), veterinary care, vaccines, feed, and practical training in livestock management and enterprise development. As the goats reproduce, the first female kid is passed on to another vulnerable woman, enabling her to start her own ruminant enterprise. At the same time, the original beneficiary retains the remaining offspring to grow her herd, increase her income, and strengthen her household's resilience.
              </p>
              <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.8, margin: 0 }}>
                This simple "pass-it-on" approach ensures that every donation creates lasting impact beyond a single beneficiary. As more women receive goats, more households gain sustainable sources of income, communities become more resilient, and a cycle of economic empowerment is created.
              </p>
            </div>

            {/* Livelihood Package Cost Breakdown */}
            <div style={{ background: '#f4f8f5', borderRadius: '24px', padding: '36px', marginBottom: '50px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Your Impact Starts Here
              </h2>
              <p style={{ fontSize: '15.5px', color: 'var(--text-light)', lineHeight: 1.7, marginBottom: '24px' }}>
                Every 150,000 equips one conflict-affected woman with everything she needs to establish a sustainable small-ruminant enterprise.
              </p>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--text)' }}>
                Your Contribution Provides
              </h3>
              
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14.5px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e2ece5' }}>
                    <th style={{ textAlign: 'left', padding: '12px 8px', color: 'var(--sky-dark)', fontWeight: 700 }}>Provision Component</th>
                    <th style={{ textAlign: 'right', padding: '12px 8px', color: 'var(--sky-dark)', fontWeight: 700 }}>Donation Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2ece5' }}>
                    <td style={{ padding: '12px 8px', color: 'var(--text-light)' }}>Two healthy six-month olds goats</td>
                    <td style={{ textAlign: 'right', padding: '12px 8px', fontWeight: 700, color: 'var(--text)' }}>90,000</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2ece5' }}>
                    <td style={{ padding: '12px 8px', color: 'var(--text-light)' }}>Nutritious feed</td>
                    <td style={{ textAlign: 'right', padding: '12px 8px', fontWeight: 700, color: 'var(--text)' }}>28,000</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2ece5' }}>
                    <td style={{ padding: '12px 8px', color: 'var(--text-light)' }}>Vaccines and veterinary care</td>
                    <td style={{ textAlign: 'right', padding: '12px 8px', fontWeight: 700, color: 'var(--text)' }}>20,000</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2ece5' }}>
                    <td style={{ padding: '12px 8px', color: 'var(--text-light)' }}>A secure livestock pen</td>
                    <td style={{ textAlign: 'right', padding: '12px 8px', fontWeight: 700, color: 'var(--text)' }}>12,000</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px 8px', fontWeight: 800, color: 'var(--sky-dark)' }}>Total Investment</td>
                    <td style={{ textAlign: 'right', padding: '16px 8px', fontWeight: 800, color: 'var(--sky)', fontSize: '16px' }}>150,000</td>
                  </tr>
                </tbody>
              </table>

              <p style={{ fontSize: '14px', color: 'var(--text-light)', lineHeight: 1.6, marginTop: '20px', margin: '20px 0 0' }}>
                Every component plays a vital role. Together, they provide the foundation for a livelihood that can generate income, restore stability, and create lasting economic opportunity.
              </p>
            </div>

            {/* Preset Selection Cards */}
            <h2 className="section-title" style={{ fontSize: '26px', marginBottom: '24px', color: 'var(--sky-dark)', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
              Choose Your Impact
            </h2>
            <div className="responsive-grid-2" style={{ gap: '20px', marginBottom: '24px' }}>
              <div 
                onClick={() => selectImpact(15000)} 
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  background: formData.amount === '15000' ? 'var(--sky)' : '#f4f8f5',
                  color: formData.amount === '15000' ? 'white' : 'var(--text)',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>
                  <Activity style={{ color: formData.amount === '15000' ? 'white' : 'var(--sky)' }} />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>15,000</div>
                <p style={{ fontSize: '13.5px', opacity: 0.9, lineHeight: 1.5, margin: 0 }}>Help provide feed and veterinary care.</p>
              </div>

              <div 
                onClick={() => selectImpact(30000)} 
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  background: formData.amount === '30000' ? 'var(--sky)' : '#f4f8f5',
                  color: formData.amount === '30000' ? 'white' : 'var(--text)',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>
                  <Shield style={{ color: formData.amount === '30000' ? 'white' : 'var(--sky)' }} />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>30,000</div>
                <p style={{ fontSize: '13.5px', opacity: 0.9, lineHeight: 1.5, margin: 0 }}>Strengthen a woman's livestock enterprise.</p>
              </div>

              <div 
                onClick={() => selectImpact(75000)} 
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  background: formData.amount === '75000' ? 'var(--sky)' : '#f4f8f5',
                  color: formData.amount === '75000' ? 'white' : 'var(--text)',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>
                  <Landmark style={{ color: formData.amount === '75000' ? 'white' : 'var(--sky)' }} />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>75,000</div>
                <p style={{ fontSize: '13.5px', opacity: 0.9, lineHeight: 1.5, margin: 0 }}>Fund half of a complete livelihood package.</p>
              </div>

              <div 
                onClick={() => selectImpact(150000)} 
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '16px', 
                  padding: '24px', 
                  background: formData.amount === '150000' ? '#ffc83b' : '#f4f8f5',
                  color: formData.amount === '150000' ? '#1c1503' : 'var(--text)',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '12px' }}>
                  <Heart style={{ color: formData.amount === '150000' ? '#1c1503' : 'var(--sky)' }} />
                </div>
                <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '6px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>150,000</div>
                <div style={{ fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', marginBottom: '4px' }}>Sponsor One Conflict-Affected Woman</div>
                <p style={{ fontSize: '13.5px', opacity: 0.9, lineHeight: 1.5, margin: 0 }}>Equip one woman with everything she needs to rebuild.</p>
              </div>
            </div>

            <p style={{ fontSize: '14.5px', color: 'var(--text-light)', fontStyle: 'italic', marginBottom: '40px', textAlign: 'center' }}>
              Or give any amount. Every contribution moves another woman closer to economic independence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Paystack Checkout form container */}
            <div id="paystackForm" style={{ background: '#f4f8f5', borderRadius: '24px', padding: '40px' }}>
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
                Ikore Empowerment Foundation is a registered non-profit. All donations directly fund livestock, training, and veterinary support.
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
