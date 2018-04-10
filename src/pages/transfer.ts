import { CoinTool } from './../tools/cointool';
import { neotools } from './../tools/neotools';
import { LoginInfo, BalanceInfo, Result, NeoAsset } from './../tools/entity';
import { StorageTool } from './../tools/storagetool';
import WalletLayout from "../layouts/wallet.vue";
import axios from "axios"
import { WWW } from '../tools/wwwtool';
import Vue from "vue";
import Component from "vue-class-component";

declare const mui;
@Component({
    components: {
        "wallet-layout": WalletLayout
    }
})
export default class transfer extends Vue 
{
    targetaddr: string;
    amount: string;
    asset: string;
    balances: BalanceInfo[] = [];
    balance: BalanceInfo = new BalanceInfo();
    constructor() 
    {
        super();
        this.targetaddr = "";
        this.amount = "";
        this.asset = "";
    }
    mounted() 
    {
        var choose = StorageTool.getStorage("transfer_choose");
        this.asset = choose;
        var str = StorageTool.getStorage("balances_asset");
        this.balances = JSON.parse(str) as BalanceInfo[];
        var n: number = this.balances.findIndex(b => b.asset == this.asset);
        this.balance = this.balances[ n ];
    }
    choose()
    {
        StorageTool.setStorage("transfer_choose", this.asset);
        var n: number = this.balances.findIndex(b => b.asset == this.asset);
        this.balance = this.balances[ n ];
    }
    verify_addr()
    {
        if (neotools.verifyPublicKey(this.targetaddr))
            alert("地址正确");
        else
            alert("错误地址");
    }
    verify_Amount()
    {

    }
    async send()
    {
        var res: Result = await CoinTool.rawTransaction(this.targetaddr, this.asset, this.amount);
        if (!res.err)
            mui.alert(res.info);
    }
}