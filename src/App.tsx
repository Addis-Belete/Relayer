import "./App.css";
import {
  connect,
  accounts,
  transfer,
  sendToReceiver,
  estimateGas,
} from "./relayer";
import { useEffect, useState } from "react";
function App() {
  const [token, setToken] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const handletokenChange = (e: any) => {
    setToken(e.target.value);
    console.log(token);
  };

  return (
    <div className="App">
      <div className="connect">
        <button onClick={connect}>Connect </button>
        <p>0x000000000000000000</p>
      </div>
      <form className="form">
        <label>
          {" "}
        <p> Token:</p> 
          <select
            name="asset"
            id="asset"
            onChange={(e) => handletokenChange(e)}
          >
            <option value="0xb7ed4Ce3094a2F399b45b92683a9A8A3A6E381A9">
              USDT
            </option>
            <option value="0x8c219533ACb236a433aB8C24B5877C7a4C51E46A">
              USDC
            </option>
            <option value="0x9d419dda485417C329C2cF142D933a3B69FbfeF4">
              DAI
            </option>
          </select>
        </label>
        <label>
          {" "}
         <p> To:</p>
          <input type="text" onChange={(e) => setTo(e.target.value)} />
        </label>
        <label>
          {" "}
        <p> Amount:</p> 
          <input type="text" onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button onClick={() => transfer(token, to, amount)}>transfer</button>
        <button onClick={sendToReceiver}>Send</button>
      </form>
    </div>
  );
}

export default App;
