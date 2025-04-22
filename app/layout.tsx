export const metadata = {
  title: 'MASTAXIFANTASY',
  description: 'Fantasy tips, stats, pitch reports & dream teams',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Segoe UI, sans-serif' }}>
        {/* NavBar */}
        <nav style={{
          backgroundColor: '#ff1744',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '1rem',
          fontWeight: 'bold',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/pitch-report" style={{ color: 'white', textDecoration: 'none' }}>Pitch Report</a>
          <a href="/stats" style={{ color: 'white', textDecoration: 'none' }}>Stats</a>
          <a href="/team-predictions" style={{ color: 'white', textDecoration: 'none' }}>Teams</a>
          <a href="https://t.me/MASTAXIFANTASYCOM" target="_blank" style={{ color: 'white', textDecoration: 'none' }}>Telegram</a>
        </nav>

        {/* Page content */}
        <div>{children}</div>
      </body>
    </html>
  );
}