import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [amount, setAmount] = useState(100);

  const handleLaunch = async () => {
    const res = await fetch("http://localhost:4000/deploy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, symbol, amount })
    });
    const data = await res.json();
    alert(JSON.stringify(data));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 Launch Meme Token</h1>
      <input placeholder="Token Name" onChange={(e) => setName(e.target.value)} /><br />
      <input placeholder="Token Symbol" onChange={(e) => setSymbol(e.target.value)} /><br />
      <input type="number" placeholder="Amount in $" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
      <button onClick={handleLaunch}>Launch</button>
    </div>
  );
}
