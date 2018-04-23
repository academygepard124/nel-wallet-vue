import { CoinTool } from './../tools/cointool';
import { LoginInfo, BalanceInfo, Result, NeoAsset, Nep5Balance } from './../tools/entity';
import { StorageTool } from './../tools/storagetool';
import Vue from "vue";
import { Component } from "vue-property-decorator";
import WalletLayout from "../layouts/wallet.vue";
import axios from "axios"
import { WWW } from '../tools/wwwtool';

declare const mui;

@Component({
  components: {
    "wallet-layout": WalletLayout
  }
})
export default class balance extends Vue 
{
  // Data property
  neoasset: NeoAsset;
  balances: Array<BalanceInfo>;
  currentAddress: string = "";
  chooseAddressarr: Array<LoginInfo>;
  chooseAddress: string = "";
  loadmsg: string = "";
  claimbtn: boolean = true;

  constructor()
  {
    super();
    this.neoasset = new NeoAsset();
    this.balances = new Array();
    this.neoasset.gas = 0;
    this.neoasset.neo = 0;
    this.neoasset.claim = '';
    this.chooseAddressarr = new Array();
    this.chooseAddressarr = StorageTool.getLoginArr();
  }
  // Component method
  mounted()
  {
    this.currentAddress = LoginInfo.getCurrentAddress();
    this.getBalances();
  }

  addressSwitch()
  {
    LoginInfo.setCurrentAddress(this.chooseAddress);
    this.currentAddress = this.chooseAddress;
    this.getBalances();
  }

  //获取余额
  async getBalances()
  {
    CoinTool.initAllAsset();
    //获得balance列表
    var balances = await WWW.api_getBalance(this.currentAddress) as BalanceInfo[];
    var clamis = await WWW.api_getclaimgas(this.currentAddress, 0);
    var clamis2 = await WWW.api_getclaimgas(this.currentAddress, 1);
    var nep5balances = await WWW.api_getnep5Balance(this.currentAddress) as Nep5Balance[];
    this.neoasset.neo = 0;
    this.neoasset.gas = 0;
    if (balances) //余额不唯空
    {
      balances.map(item => item.names = CoinTool.assetID2name[ item.asset ]); //将列表的余额资产名称赋值
      this.balances = balances; //塞入页面modual
      let sum1 = Neo.Fixed8.parse(clamis[ "gas" ].toFixed(8));
      let sum2 = Neo.Fixed8.parse(clamis2[ "gas" ].toFixed(8));
      let sum = sum1.add(sum2).toString()
      this.neoasset.claim = sum;   //塞入claim
      this.balances.forEach //取NEO 和GAS
        (
        (balance) =>
        {
          if (balance.asset == CoinTool.id_NEO)
          {
            this.neoasset.neo = balance.balance;
          }
          if (balance.asset == CoinTool.id_GAS)
          {
            this.neoasset.gas = balance.balance;
          }
        });
    }
    if (nep5balances)
    {
      for (let index = 0; index < nep5balances.length; index++)
      {
        const nep5 = nep5balances[ index ];
        var nep5b: BalanceInfo = new BalanceInfo();
        nep5b.asset = nep5.assetid;
        nep5b.balance = nep5.balance;
        nep5b.names = nep5.symbol;
        nep5b.type = "nep5";
        this.balances.push(nep5b);
      }
    }
    StorageTool.setStorage("balances_asset", JSON.stringify(this.balances));
  }

  async toClaimGas()
  {
    if (Neo.Fixed8.parse(this.neoasset.claim).compareTo(Neo.Fixed8.Zero) > 0)
    {
      if (this.neoasset.neo > 0)
      {
        this.claimbtn = false;
        this.loadmsg = "Sending NEO to account address…";
        let res = await CoinTool.rawTransaction(this.currentAddress, CoinTool.id_NEO, this.neoasset.neo.toString());
        if (res.info)
        {
          this.loadmsg = "Waiting for confirmation of transfer…";
          this.queryNEOTx(res.info);
        }
      } else
      {
        this.loadmsg = "Claiming GAS…";
        let res = await CoinTool.claimGas();
        if (res[ "sendrawtransactionresult" ])
        {
          let txid = res[ "txid" ];
          this.queryClaimTx(txid);
        }
      }
    }
  }

  async queryNEOTx(txid)
  {
    setTimeout(async () =>
    {
      let res = await WWW.getrawtransaction(txid);
      if (!res)
      {
        this.queryNEOTx(txid);
        return;
      }
      this.loadmsg = "Claiming GAS…";
      let result = await CoinTool.claimGas();
      if (result[ "sendrawtransactionresult" ])
      {
        let txid = result[ "txid" ];
        this.queryClaimTx(txid);
      }
    }, 20000);
  }

  async queryClaimTx(txid)
  {
    setTimeout(async () =>
    {
      var res = await WWW.getrawtransaction(txid);
      if (res)
      {
        this.loadmsg = "Your GAS claim is successful!";
        this.claimbtn = true;
        this.getBalances();
        return;
      }
      this.queryClaimTx(txid);
    }, 20000);
  }

  toTransfer(asset: string)
  {
    StorageTool.setStorage("transfer_choose", asset);
    window.location.hash = "#transfer";
  }

}