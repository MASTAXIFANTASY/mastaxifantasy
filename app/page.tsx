export default function Home() {
  return (
    <main style={{
      backgroundColor: '#1e1e1e',
      color: '#FFD700',
      padding: '3rem',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#FF1744' }}>MASTAXIFANTASY</h1>
      <p>Your ultimate fantasy cricket destination!</p>

      <div style={{
        background: '#2c2c2c',
        border: '2px solid #FFD700',
        borderRadius: '10px',
        padding: '1.5rem',
        marginTop: '2rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h2>Today's IPL Pitch Report</h2>
        <p>Stay tuned for live updates...</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href="https://t.me/mastaxifantasy" target="_blank" rel="noopener noreferrer" style={{
          background: '#FF1744',
          color: '#fff',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          Join Our Telegram
        </a>
      </div>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
        Contact: <a href="mailto:mastaxifantasy@gmail.com" style={{ color: '#FFD700' }}>mastaxifantasy@gmail.com</a>
      </p>
    </main>
  )
}
