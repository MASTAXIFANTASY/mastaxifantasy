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