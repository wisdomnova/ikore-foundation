import React from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () =>void;
}

export const SuccessModal: React.FC<SuccessModalProps>= ({ isOpen, onClose }) =>{
  if (!isOpen) return null;

  return (
    <div
      id="successModal"
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        background: 'rgba(18,78,27,0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.3s ease'
      }}
    ><div
        style={{
          background: 'white',
          width: '100%',
          maxWidth: '500px',
          padding: '40px',
          borderRadius: '24px',
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          border: '2px solid var(--sky)'
        }}
      ><div style={{ fontSize: '70px', marginBottom: '20px' }}></div><h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '28px',
            marginBottom: '12px',
            color: 'var(--text)'
          }}
        >Thank You!
        </h3><p
          style={{
            color: 'var(--text-light)',
            lineHeight: 1.6,
            fontSize: '15.5px',
            marginBottom: '24px'
          }}
        >Your donation has been processed successfully. A confirmation email has been sent to your inbox.
        </p><button
          onClick={onClose}
          style={{
            background: 'var(--sky)',
            color: 'white',
            border: 'none',
            padding: '12px 32px',
            borderRadius: '20px',
            fontWeight: 700,
            fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(56,182,232,0.3)'
          }}
        >Close
        </button></div></div>);
};
