// Simple Vapi Voice Button Component - No external dependencies
export function VapiVoiceButton() {
  return (
    <>
      <div
        id="vapi-voice-widget"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 99999,
        }}
      >
        <button
          onClick={() => {
            const modal = document.getElementById('vapi-modal');
            if (modal) modal.style.display = 'flex';
          }}
          style={{
            background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(147, 51, 234, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          🎙️ AI Voice Demo
        </button>
      </div>

      <div
        id="vapi-modal"
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 100000,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            width: '90%',
            maxWidth: '450px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
              padding: '20px',
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: '20px' }}>Golf Course AI Assistant</h2>
              <p style={{ margin: '4px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
                Powered by Vapi
              </p>
            </div>
            <button
              onClick={() => {
                const modal = document.getElementById('vapi-modal');
                if (modal) modal.style.display = 'none';
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                padding: 0,
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              ×
            </button>
          </div>
          <div style={{ padding: '16px', background: '#f9fafb' }}>
            <iframe
              src="https://vapi.ai/embed?publicKey=daf87472-30a2-44a9-96bb-1b832815c8d1&assistantId=1fa0e900-ab80-449a-b8c7-02e55c371cc5"
              width="100%"
              height="450"
              frameBorder="0"
              allow="microphone"
              style={{ borderRadius: '8px', background: 'white' }}
            />
            <p
              style={{
                textAlign: 'center',
                color: '#666',
                margin: '12px 0 0 0',
                fontSize: '14px',
              }}
            >
              Click the microphone to start talking
            </p>
          </div>
        </div>
      </div>
    </>
  );
}