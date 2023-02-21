import Web3 from "web3"

declare let window: any;
let web3:any;
export let accounts: string [];
export async function connect() {
	if (typeof window.ethereum !== 'undefined') {
 	web3 = new Web3(window.ethereum);
	await window.ethereum.enable();
	 accounts = await  web3.eth.getAccounts()
	return accounts;
}
}