export default function Home() {
  return (
    <main style={{
      backgroundColor: '#f8f9fa',
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#d90429', 
        fontSize: '3rem', 
        marginBottom: '1rem' 
      }}>
        MASTAXIFANTASY
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
        Real Stats. Real Teams. Real Wins.
      </p>

      {/* Pitch Report */}
      <div style={{
        backgroundColor: '#ffffff',
        borderLeft: '5px solid #d90429',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#0077b6' }}>Today's Pitch Report</h2>
        <p><strong>Match:</strong> KKR vs GT</p>
        <p><strong>Venue:</strong> Eden Gardens</p>
        <p><strong>Pitch:</strong> Batting-friendly, flat wicket</p>
        <p><strong>Weather:</strong> Clear skies – 29°C</p>
      </div>

      {/* Key Stats */}
      <div style={{
        backgroundColor: '#ffffff',
        borderLeft: '5px solid #52b788',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '1rem',
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#40916c' }}>Key Player Stats</h2>
        <ul style={{ paddingLeft: '1rem' }}>
          <li>Jaiswal – Avg: 42.3 | SR: 153</li>
          <li>Rashid – 17 wickets | Econ: 6.7</li>
          <li>Marco Jansen – Best left-arm differential</li>
        </ul>
      </div>

      {/* Telegram CTA */}
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <a href="https://t.me/MASTAXIFANTASYCOM" target="_blank" style={{
          backgroundColor: '#ef233c',
          color: '#fff',
          padding: '1rem 2rem',
          borderRadius: '50px',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          Join Us on Telegram
        </a>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '3rem',
        paddingTop: '1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#555'
      }}>
        Contact: <a href="mailto:mastaxifantasy@gmail.com" style={{ color: '#0077b6' }}>mastaxifantasy@gmail.com</a>
      </footer>
    </main>
  );
}
export default function PitchReportPage() {
  return (
    <main style={{ padding: '2rem', background: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ color: '#d90429', textAlign: 'center' }}>Today’s Pitch Report</h1>
      <div style={{
        background: 'white',
        padding: '1rem',
        marginTop: '2rem',
        borderLeft: '6px solid #ff1744',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <p><strong>Match:</strong> KKR vs GT</p>
        <p><strong>Venue:</strong> Eden Gardens</p>
        <p><strong>Pitch:</strong> Batting-friendly, flat wicket</p>
        <p><strong>Weather:</strong> Clear skies – 29°C</p>
      </div>
    </main>
  );
}
export default function StatsPage() {
  return (
    <main style={{ padding: '2rem', background: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#0f766e', textAlign: 'center' }}>Key Player Stats</h1>
      <div style={{
        background: 'white',
        padding: '1rem',
        marginTop: '2rem',
        borderLeft: '6px solid #10b981',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li><strong>Jaiswal:</strong> Avg: 42.3 | SR: 153</li>
          <li><strong>Rashid:</strong> 17 wickets | Econ: 6.7</li>
          <li><strong>Marco Jansen:</strong> Best left-arm differential</li>
        </ul>
      </div>
    </main>
  );
}
export default function TeamPredictions() {
  return (
    <main style={{ padding: '2rem', background: '#fff7ed', minHeight: '100vh' }}>
      <h1 style={{ color: '#f97316', textAlign: 'center' }}>Today’s Final Dream11 Teams</h1>
      <div style={{
        background: 'white',
        padding: '1rem',
        marginTop: '2rem',
        borderLeft: '6px solid #fb923c',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <p><strong>Team 1:</strong> Jaiswal (C), Rashid (VC), Narine, Shubman, Klaasen</p>
        <p><strong>Team 2:</strong> Marco Jansen (VC), Gill (C), Russell, Gurbaz, Noor</p>
        <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#c2410c' }}>
          Final teams will be locked at 6:45 PM — check our Telegram for updates.
        </p>
      </div>
    </main>
  );
}