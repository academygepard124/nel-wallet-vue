import { AuctionInfoService } from "./AuctionInfoService";
import { AuctionService } from "./AuctionServices";
import { store } from "../store/index";
import { ExchangeService } from "./ExchangeServices";
import { TransferService } from "./TransferService";
import { DomainBuyService } from "./DomainBuyService";

export namespace services
{
    export const auction_neo = new AuctionService(store.auction_neo);
    export const auction_test = new AuctionService(store.auction_test);
    export const auctionInfo_neo = new AuctionInfoService(24 * 60 * 60);
    export const auctionInfo_test = new AuctionInfoService(5 * 60);
    export const exchange = new ExchangeService();
    export const transfer = new TransferService();
    export const buyAuction_neo = new DomainBuyService();
}