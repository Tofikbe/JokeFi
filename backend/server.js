import express from "express";
import { exec } from "child_process";

const app = express();
app.use(express.json());

// Your receiving wallet
const OWNER_WALLET = "0x945766857f167CAd41d047672868d94a7FFe212c";

app.post("/deploy", (req, res) => {
  const { name, symbol, amount } = req.body;

  if (amount < 100) {
    return res.status(400).json({ error: "Minimum $100 required" });
  }

  // Supply formula: 100$ = 100k tokens
  let supply = amount * 1000;
  if (supply > 1_000_000_000) supply = 1_000_000_000;

  // Call Hardhat deploy script
  const cmd = `npx hardhat run scripts/deploy.js --network sepolia "${name}" "${symbol}" ${supply} ${OWNER_WALLET}`;
  exec(cmd, { cwd: "../contracts" }, (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      return res.status(500).json({ error: "Deployment failed" });
    }
    console.log(stdout);
    res.json({ message: "Token deployed!", logs: stdout });
  });
});

app.listen(4000, () => console.log("🚀 Backend running on port 4000"));
