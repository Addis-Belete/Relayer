
import './App.css';
import { connect, accounts } from './relayer';
import { useEffect, useState } from 'react';
function App() {
	
  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
		<select name="asset" id="asset">
			<option>USDT</option>
			<option>USDC</option>
			<option value="1">DAI</option>

		</select>
    </div>
  );
}

export default App;
