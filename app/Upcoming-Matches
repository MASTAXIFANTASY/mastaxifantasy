export default function UpcomingMatches() {
  const matches = [
    {
      league: 'IPL',
      match: 'RCB vs CSK',
      date: 'April 23, 2025',
      time: '7:30 PM IST',
      venue: 'Chinnaswamy Stadium',
    },
    {
      league: 'PSL',
      match: 'LQ vs IU',
      date: 'April 24, 2025',
      time: '8:00 PM PKT',
      venue: 'Gaddafi Stadium, Lahore',
    },
    {
      league: 'International',
      match: 'India vs Bangladesh (ODI)',
      date: 'April 25, 2025',
      time: '1:30 PM IST',
      venue: 'Eden Gardens, Kolkata',
    },
    {
      league: 'CPL',
      match: 'TKR vs BR',
      date: 'April 26, 2025',
      time: '7:00 PM Local',
      venue: 'Queen’s Park Oval',
    }
  ];

  return (
    <main style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#d90429' }}>Upcoming Matches</h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '2rem'
      }}>
        {matches.map((m, index) => (
          <div key={index} style={{
            background: 'white',
            borderLeft: `5px solid ${m.league === 'IPL' ? '#ff1744' : m.league === 'PSL' ? '#0f766e' : '#1e40af'}`,
            padding: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: 0 }}>{m.match} <span style={{ fontSize: '0.9rem', color: '#555' }}>({m.league})</span></h3>
            <p style={{ margin: '0.25rem 0' }}><strong>Date:</strong> {m.date}</p>
            <p style={{ margin: '0.25rem 0' }}><strong>Time:</strong> {m.time}</p>
            <p style={{ margin: '0.25rem 0' }}><strong>Venue:</strong> {m.venue}</p>
          </div>
        ))}
      </div>
    </main>
  )
}