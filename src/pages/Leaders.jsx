export default function Leaders() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "200vh", // Ensures the page can scroll
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          width: "378px",
          height: "auto",
          marginTop: "981px",
          marginLeft: "454px",
          backgroundColor: "#ffffff",
          border: "2px solid #ddd",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Leadership Team */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            Leadership Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "15px",
            }}
          >
            {/* Leadership Team Members */}
            {[
              {
                name: "Bidemi Emmanuel",
                role: "Technical Team",
                image: "https://drive.google.com/file/d/1bvAKsrqYLNNQXpKQ-0oFiQvYodK_63qf/view?usp=sharing",
              },
              {
                name: "Funmi Akinteye",
                role: "Music Team",
                image: "https://drive.google.com/file/d/1iiR_WoOjp214YRzVEu3FU4cjh4afCjsE/view?usp=sharing",
              },
              {
                name: "Mabel Emmanuel",
                role: "Hospitality, Housekeeping, and Children",
                image: "https://drive.google.com/file/d/13x6icY-3H3Lx-RdJYFeXrDBt83rCOPLi/view?usp=sharing",
              },
              {
                name: "Victoria Aderinto",
                role: "Creative Team",
                image: "https://drive.google.com/file/d/1Wk9lALWIssKgvSMR7KDv4VjcDcZaZ4N1/view?usp=sharing",
              },
              {
                name: "Biodun Benjamin",
                role: "Evangelism",
                image: "https://drive.google.com/file/d/1EmQ83ucSOfV8FTemoh317JYwDrzejIyp/view?usp=sharing",
              },
            ].map((member, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ fontWeight: "bold", marginTop: "5px" }}>
                  {member.name}
                </div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pastoral Team */}
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
            Pastoral Team
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "15px",
            }}
          >
            {/* Pastoral Team Members */}
            {[
              {
                name: "Dave Aderinto",
                role: "Founding Father",
                image: "https://drive.google.com/file/d/1ykcvVyDblhz0dApylDNk_cndJDfoyZdh/view?usp=sharing",
              },
              {
                name: "Grace Aderinto",
                role: "Grace Aderinto",
                image: "https://drive.google.com/file/d/1t7a2BgeRKhpL2Zlr85KwhuZBPaXnIsOQ/view?usp=sharing",
              },
              {
                name: "Bidemi Emmanuel",
                role: "Bidemi Emmanuel",
                image: "https://drive.google.com/file/d/1bvAKsrqYLNNQXpKQ-0oFiQvYodK_63qf/view?usp=sharing",
              },
              {
                name: "Leye Aderinto",
                role: "Leye Aderinto",
                image: "https://drive.google.com/file/d/1AjEhYW5mpABryqvLPG979tBuaA-lAUHU/view?usp=sharing",
              },
            ].map((member, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    maxHeight: "150px",
                    objectFit: "cover",
                  }}
                />
                <div style={{ fontWeight: "bold", marginTop: "5px" }}>
                  {member.name}
                </div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
