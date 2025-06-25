// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title BlockchainMessenger
 * @dev 一个简单的区块链消息存储合约，允许部署者存储和更新消息，任何人都可以读取
 */
contract BlockchainMessenger {
    // 存储消息的变量
    string private message;

    // 消息更新次数计数器
    uint256 public updateCount;

    // 合约拥有者地址
    address public owner;

    // 事件声明
    event MessageUpdated(string newMessage, uint256 updateCount);

    // 仅合约拥有者可执行的修饰器
    modifier onlyOwner() {
        require(msg.sender == owner, unicode"只有合约拥有者可以调用此函数");
        _;
    }

    /**
     * @dev 构造函数，设置初始消息和合约拥有者
     * @param initialMessage 初始消息内容
     */
    constructor(string memory initialMessage) {
        owner = msg.sender;
        message = initialMessage;
        updateCount = 0;

        // 初始化不计入更新次数
    }

    /**
     * @dev 更新消息内容，仅合约拥有者可调用
     * @param newMessage 新的消息内容
     */
    function updateMessage(string memory newMessage) public onlyOwner {
        message = newMessage;
        updateCount++;

        emit MessageUpdated(newMessage, updateCount);
    }

    /**
     * @dev 获取当前消息内容，任何人都可以调用
     * @return 当前存储的消息
     */
    function readMessage() public view returns (string memory) {
        return message;
    }

    /**
     * @dev 获取消息更新次数
     * @return 消息被更新的次数
     */
    function getUpdateCount() public view returns (uint256) {
        return updateCount;
    }
}
