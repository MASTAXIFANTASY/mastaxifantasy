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