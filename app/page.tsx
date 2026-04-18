export default function Home() {
  return (
    <main style={{ 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "sans-serif"
    }}>
      
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        MAIN
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Medical weight loss. Done right.
      </p>

      <a 
        href="/intake"
        style={{
          padding: "12px 24px",
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Start Intake
      </a>

    </main>
  );
}