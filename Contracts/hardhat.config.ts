import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",

	networks: {
		hardhat: {},

		mumbai: {
            url: "https://rpc-mumbai.maticvigil.com/",
            accounts:
                    [ 
                        "740d2d1aed65dbb1ef21228fdc447600d2b17d50c2fbb026f582b934694fc078",
                        "2d97d83236bd4a4b77093bf6eb73d5707786768ace7de2eae0a69ec79d70102d",
                        "80dbd2d2e8eb03f764222de904ba955e90f833cbcd5b558eb673870b2cad6abc",
                        "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
                        "5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
                        "9692ec03e857b5ac10edb0cd3ffbf667378e5b4326c4df72ce54aa7f131e2695"],
                   
          
        },


	}
};

export default config;
