import { useEffect, useState } from "react";
import { api } from "./services/api";

function App() {
  const [status, setStatus] = useState("carregando...");

  useEffect(() => {
    api.get("/health")
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus("erro"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend Igreja Platform (HML)</h1>
      <p>Status do backend: {status}</p>
    </div>
  );
}

export default App;
