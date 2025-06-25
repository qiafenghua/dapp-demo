// 使用hardhat的ethers实例部署BlockchainMessenger合约
const hre = require("hardhat");

async function main() {
    // 获取部署账户
    const [deployer] = await hre.ethers.getSigners();

    console.log("使用账户地址部署合约:", deployer.address);
    console.log("账户余额:", (await deployer.getBalance()).toString());

    // 编译合约
    const BlockchainMessenger = await hre.ethers.getContractFactory("BlockchainMessenger");

    // 部署合约，传入初始消息
    const initialMessage = "This is the first message on blockchain!";
    const messenger = await BlockchainMessenger.deploy(initialMessage);

    // 等待部署完成
    await messenger.deployed();

    console.log("BlockchainMessenger合约已部署到地址:", messenger.address);

    // 将合约地址和ABI保存到文件中，方便前端调用
    const fs = require("fs");
    const data = {
        address: messenger.address,
        abi: JSON.parse(messenger.interface.format('json'))
    };

    fs.writeFileSync('BlockchainMessengerData.json', JSON.stringify(data));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("部署出错:", error);
        process.exit(1);
    }); 