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
        <a href="https://t.me/MASTAXIFANTASYCOM" target="_blank" rel="noopener noreferrer" style={{
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
export default function Stats() {
  return (
    <main style={{ padding: '2rem', backgroundColor: '#121212', color: '#FFD700' }}>
      <h1 style={{ color: '#FF1744' }}>Top Player Stats</h1>
      <ul style={{ paddingLeft: '1rem' }}>
        <li><strong>Jaiswal</strong> – Avg: 42.3 – SR: 153</li>
        <li><strong>Rinku Singh</strong> – Avg: 36.2 – SR: 145</li>
        <li><strong>Rashid Khan</strong> – Wickets: 17 – Econ: 6.7</li>
        <li><strong>Marco Jansen</strong> – Strike Bowler – Left arm angle threat</li>
        <li>More auto-updating stats coming soon...</li>
      </ul>
    </main>
  )
}
export default function TeamPredictions() {
  return (
    <main style={{ padding: '2rem', backgroundColor: '#121212', color: '#FFD700' }}>
      <h1 style={{ color: '#FF1744' }}>Today's Dream11 Teams</h1>
      <p>Entry: ₹49 Mega | Prize: ₹4 Crore</p>

      <ul style={{ paddingLeft: '1rem' }}>
        <li><strong>Team 1:</strong> Jaiswal (C), Rashid (VC), Rinku, Narine...</li>
        <li><strong>Team 2:</strong> Marco Jansen (C), Gurbaz, Shreyas Iyer...</li>
        <li><strong>Team 3:</strong> Balanced safe core with explosive picks</li>
      </ul>

      <p>Full 7 Teams will be uploaded by 6:45 PM IST daily.</p>
      <p>Join Telegram for Live Final Updates:</p>
      <a href="https://t.me/MASTAXIFANTASYCOM" target="_blank" style={{
        color: '#FF1744', textDecoration: 'underline'
      }}>@MASTAXIFANTASYCOM</a>
    </main>
  )
}
