export default function Intake() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      padding: "40px",
      fontFamily: "sans-serif"
    }}>

      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Intake
      </h1>

      <form 
  style={{ maxWidth: "400px" }}
  onSubmit={(e) => {
    e.preventDefault();

    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      dob: e.target[3].value,
      height: e.target[4].value,
      weight: e.target[5].value,
      conditions: e.target[6].value,
      meds: e.target[7].value,
    };

    console.log("INTAKE DATA:", data);

    alert("Submitted. Check console.");
  }}
>

  <input placeholder="Full Name" style={inputStyle} />
  <input placeholder="Email" style={inputStyle} />
  <input placeholder="Phone" style={inputStyle} />
  <input placeholder="Date of Birth" style={inputStyle} />

  <input placeholder="Height" style={inputStyle} />
  <input placeholder="Weight" style={inputStyle} />

  <textarea placeholder="Medical Conditions" style={inputStyle} />
  <textarea placeholder="Current Medications" style={inputStyle} />

  <button style={buttonStyle}>
    Continue
  </button>

</form>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "none"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold"
};