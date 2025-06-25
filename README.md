# 区块链消息应用

这是一个基于以太坊区块链的消息存储应用，允许合约拥有者在区块链上存储和更新消息，任何人都可以读取这些消息，并查看消息更新的次数。

## 功能特点

- **公开可读**：任何人都可以读取存储在合约中的消息
- **私有可写**：只有合约部署者（拥有者）可以更新消息内容
- **更新计数**：自动记录消息被更新的次数
- **事件通知**：每次消息更新都会触发事件，方便前端或其他应用监听

## 项目结构

- `contracts/BlockchainMessenger.sol` - 智能合约源代码
- `deploy.js` - 合约部署脚本
- `index.html` - 前端交互界面
- `hardhat.config.js` - Hardhat配置文件

## 技术栈

- Solidity ^0.8.0 - 智能合约开发语言
- ethers.js - 以太坊JavaScript库
- HTML/CSS/JavaScript - 前端界面

## 如何使用

### 1. 安装依赖

```bash
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers@5.7.2
```

### 2. 编译合约

```bash
npx hardhat compile
```

### 3. 运行本地区块链（新终端）

```bash
npx hardhat node
```

### 4. 部署合约

```bash
npx hardhat run deploy.js --network localhost
```

### 5. 访问前端应用

打开`index.html`文件在浏览器中访问

### 6. 使用MetaMask连接

1. 安装MetaMask浏览器扩展
2. 连接到本地网络 (http://localhost:8545)
3. 导入Hardhat提供的私钥之一（部署日志中显示）
4. 如果你使用部署合约的账户，你将能够更新消息

## 合约地址

当前部署地址: `0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512`

## 注意事项

- 本应用仅用于演示，在实际环境中部署前请进行安全审计
- 在实际使用时，需要将合约部署到测试网或主网

## 安全考虑

- 合约使用`onlyOwner`修饰器确保只有拥有者可以更新消息
- 消息存储在区块链上，对所有人公开可见
- 请勿存储敏感信息，因为区块链上的数据是永久且公开的

## 扩展建议

- 添加消息历史记录功能
- 实现多条消息管理
- 添加访问控制机制，允许拥有者授权其他地址更新消息
- 实现消息加密功能，只允许特定用户解密

## 许可证

MIT 