import Web3 from "web3";
import targetABI from "./artifacts/contracts/Target.sol/Token.json";
import receiverABI from "./artifacts/contracts/Receiver.sol/Receiver.json";
declare let window: any;
let web3: any;
let receiverAddress: string = "0x043e0FbD79AE19877A606c60DB244168A56C3dC9";
let gasLimit: number = 200000000;
let meta_tx: any = [];
let mainAddress: string = "";
export let accounts: string[];
export async function connect() {
  if (typeof window.ethereum !== "undefined") {
    web3 = new Web3(window.ethereum);
     accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts;
  }
}

export async function transfer(token: string, to: string, amount: string) {
  if (accounts.length > 0) {
	console.log(accounts[0], "signer")
	console.log(token, "token from transfer function")
	console.log(to);
    let targetContract = new web3.eth.Contract(targetABI.abi, token);
	console.log(targetContract)

    await targetContract.methods
      .approve(receiverAddress, amount)
      .send({ from: accounts[0] })

      .then((res: any) => {
        let metaObject = {};
        metaObject = {
          token: token,
          from: accounts[0],
          to: to,
          amount: amount,
        };

        meta_tx.push(metaObject);
      });

  } else {
    connect();
  }
	console.log(meta_tx)
}

export async function sendToReceiver() {
let lastSetTimeoutId = null;
 try{
  let receiverContract = new web3.eth.Contract(
    receiverABI.abi,
    receiverAddress
  );
	let _gasLimit = await estimateGas()
  	await receiverContract.methods.relayer(meta_tx).send({ from: accounts[0], gasLimit: _gasLimit}).then(((res: any) => {
		meta_tx = [];

	}));
		if(meta_tx.length > 0){
		 lastSetTimeoutId = window.setTimeout( sendToReceiver, 13 * 1000 );
	}
 	}catch(err){
		console.error( "Error in getContent: %o", err );

	}
}

export async function estimateGas() {
	 let receiverContract = new web3.eth.Contract(
    receiverABI.abi,
    receiverAddress
  );
	let estimatedGasFee =	await receiverContract.methods.relayer(meta_tx).estimateGas({ from: accounts[0] })
	return estimatedGasFee
}
