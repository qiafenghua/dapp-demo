// 如果CDN加载失败，会使用此备份文件
window.ethers = {
    version: "备份版本 5.7.x",

    providers: {
        Web3Provider: function (ethereum) {
            this.getNetwork = async function () {
                return { name: 'unknown', chainId: await ethereum.request({ method: 'eth_chainId' }) };
            };
            this.getSigner = function () {
                return {
                    getAddress: async function () {
                        const accounts = await ethereum.request({ method: 'eth_accounts' });
                        return accounts[0];
                    }
                };
            };
        }
    },

    Contract: function (address, abi, signer) {
        this.address = address;
        this.interface = { format: function () { return '[]'; } };

        // 基本函数实现
        this.readMessage = async function () {
            return "无法连接到合约 - ethers加载失败";
        };

        this.getUpdateCount = async function () {
            return "0";
        };

        this.owner = async function () {
            return "0x0000000000000000000000000000000000000000";
        };
    }
}; 