export default {
    language: {
        name: 'English'
    },
    navbar: {
        explorer: 'Explorer',
        wallet: 'Wallet',
        mainnet: 'MainNet',
        testnet: "TestNet",
        logout: "logout",
        blockheight: "Block Height",
        toggle: "Toggle navigation"
    },
    btn: {
        confirm: "Confirm",
        reset: "Reset",
        close: "Close",
        transfer: "Transfer",
        switch: "Switch",
        claim: "Claim",
        cancel: "Cancel",
        openauction: "Open Auction",
        bid: "Bid",
        getdomain: "Get domain",
        recoversgas: "Recover SGas",
        gettingdomain: "Getting domain...",
        recoveringsgas: "Recovering SGas...",
        received: "Received",
        newbid: "New Bid",
        viewmore: "View more",
        edit: "Edit",
        renewal: "Renewal",
        exchange: "Exchange",
        withdraw: "Withdraw",
        topup: "Top up"
    },
    toast: {
        msg1: "Landing ...",
        msg2: "Authentication passed...",
        msg3: "Login failed. Please check your password or file",
        msg4: "Please enter the correct string"
    },
    login: {
        login: "Login",
        title: "Login your wallet",
        selectplaceholder: "Select keystore file.",
        selectbtn: "Select",
        passwordholder: "Enter password.",
        loginbtn: "Login",
        cutlinemsg: "or you can",
        wifmsg: "Import key from WIF String",
        nep2msg: "Import key from Nep2 String"
    },
    wif: {
        title: "WIF Private Key",
        wifplaceholder: "Enter your private key.",
        back: "Back"
    },
    nep2: {
        title: "Nep2",
        placeholder: "Enter your Nep2.",
        password: "Enter password."
    },
    generate: {
        generate: "Generate",
        title: "Generate a new wallet",
        name: "Name your wallet",
        password: "Enter password",
        passwordagain: "Confirm password",
        nameempty: "Wallet name cannot be empty.",
        namepass: "Verification pass.",
        pwderrmsg1: "Please enter a password of at least eight characters",
        pwderrmsg2: "Use at least one character and one number",
        pwderrmsg3: "Please enter the same password as above.",
        createmsg: "Your keystore file has been created.",
        downloadmsg: "You can click the ‘download’ button to save your keystore file!",
        download: "Download",
        msg: "Do not lose it!",
        msg2: "It can’t be recovered if you lose it."
    },
    balance: {
        balance: "Balance",
        title1: "NEO Balance",
        title2: "Key Address",
        title3: "GAS available to claim",
        title4: "Asset",
        title5: "Choose address",
        title6: "Select Nep6 File",
        msg1: "Sending NEO to account address…",
        msg2: "Waiting for confirmation of transfer…",
        msg3: "Claiming GAS…",
        msg4: "Your GAS claim is successful!"
    },
    transfer: {
        transfer: "Transfer",
        title1: "Asset",
        title2: "Address",
        title3: "Amount",
        title4: "History",
        msg1: "Your address is incorrect.",
        send: "Send",
        from: "from",
        to: "to",
        details: "Details",
        placeholder: "Please enter an address or domain name",
        msg2: "Your transaction has been sent, please check it later",
        msg3: "Transaction failure",
        msg4: "-_-!!!You don't have enough change, you have to wait for the block height to change before you can make the next transaction.",
        msg5: "available"
    },
    nns: {
        nns: "NNS",
        title1: "Register Neo Name",
        placeholder1: "enter a name",
        register: "Register",
        title2: "My Neo Name",
        msg1: "The testing has ended. Thanks for your participation. ",
        msg2: 'You will be rewarded with 50 NNCs on Mainnet for the first time you map your wallet address to an ending in ".test"  name successfully.',
        msg3: "Register your domain name and collect the reward.",
        err1: "The domain name has been registered.",
        text1: "Address resolver",
        text2: "Address mapping",
        text3: "Expiration Time",
        text4: "Expiration",
        waiting: "Try to refresh the page after the NEO block height is updated.",
        edit: "Edit",
        alerttitle: "Edit information",
        alerttitle1: "Neo Name",
        alerttitle2: "Adrress Resolver",
        alerttitle3: "Adrress Mapping",
        alertmessage1: "It is the official address resolver , you have to confirm this address resolver first to map your address.",
        alertmessage2: "Please enter the correct format of the address.",
    },
    setting: {
        settings: "Settings",
        title1: "My Wallet Address",
        title2: "My WIF",
        title3: "My Wallet file",
        msg1: "This information is very important . It may cause your loss if you lose it . ",
        msg2: "Save your keystore file and make copies of your wallet address and your WIF . Don't lose them .",
        msg3: "Set the password ",
        msg4: "Enter your password",
        msg5: "Create a wallet",
        btn1: "Visible",
        btn2: "Create",
        btn3: "download"
    },
    nnsneo: {
        auction: "Neo Name Auction",
        exchange: "SGas Exchange",
        myneoname: "My Neo Name",
        bonus: "Bonus"
    },
    auction: {
        title1: "Neo Name Auction",
        title2: "My Auction",
        title3: "Auction Information",
        title4: "Raise my bid",
        title5: "Timeline",
        title6: "Get my domain",
        title7: "Recover SGas",
        entername: "type a name",
        checkavailable: "It is available.",
        checkbeing: "It is being auctioned.",
        checkformat: "Please enter the domain according to the format.",
        checkbuyer: "This domain name has already been auctioned off by others.",
        sendingmsg: "We're sending a transacton,please wait patiently...",
        searchmsg: "Search by domain",
        status: "Status",
        lastauctionprice: "Last auction price",
        currentbidder: "Current bidder",
        opentime: "Bid openting time",
        fixedperiod: "Fixed period",
        randomperiod: "Random period",
        ended: "Ended",
        me: "Me",
        other: "Other people",
        buyer: "Buyer",
        hammerprice: "Hammer price",
        acutiontitle: "Auction",
        domain: "Domain",
        highest: "Highest bid price",
        raisebid: "Raise my bid",
        enterbid: "Enter a raise",
        yourbidmsg: "Your cumulative bid",
        mybidmsg: "My cumulative bid ",
        mywillbid: "My cumulative bid will be",
        price: "Price",
        tips1: "Tips : The minimum value for each increase is 0.1 SGas. When your cumulative bid is less than the  highest bid price, The raise will be unsuccessful.",
        errmsg1: "Only",
        errmsg2: "SGas is available.",
        goback: "Go back",
        waitmsg1: "（ Waiting for confirmation ）",
        waitmsg2: "Your raise will be confirmed after the new block is generated. Please wait patiently...",
        getdomaintips: "Tips : When you successfully get your domain,You can edit it in My Neo Name.",
        waitgetdomain: "Your operation will be confirmed after the new block is generated. Please wait patiently...",
        fee: "Fee",
        remainingsgas: "Remaining SGas",
        timetips1: "Tips : If nobody bids on the last day of the fixed period, the fixed period end time will be the end of the auction.",
        timetips2: "Tips : The auction is about going to random period, and it may end at any point during the random period.",
        timetips3: "Tips : The auction may end at any point during the random period, so it’s better to bid as early as possible.",
        bidstarttimemsg: "Bid start time",
        endtimemsg: "Fixed period end time",
        randomtimemsg: "Random period start time",
        maxtimemsg: "Maximum end time of random period",
        tipsmsg1: "Tips: Before the auction begins, you need to know 2 things:",
        tipsmsg2: "The asset used for the auction is SGas, and you need to top up your Auction Account with SGas to use it.",
        tipsmsg3: 'SGas needs to be redeemed with Gas at the rate of 1:1 in the "SGas Exchange" page, or you can use the top-up function directly in the Auction Account to convert the Gas in your Balance directly into SGas and top up your Auction Account with it.',
        titleaccount: "Your Auction Account",
        withdraw: "Withdraw",
        topup: "Top up",
        to: "To",
        amount: "Amount",
        asset: "Asset",
        errmsg3: "is available.",
        tipsmsg4: "Tips: When you are using Gas to recharge, before being recharged into your Auction Account, GAS will be automatically switched to SGas. The entire process takes two blocks of confirmation time. Please wait patiently. ",
        yourbalance: "Your Balance",
    },
    exchange: {
        title: "SGas Exchange",
        tosgas: "Exchange Gas for SGas",
        togas: "Exchange SGas for Gas",
        tips: "Tips：SGAS is a NEP5 token，which is bound with NEO’s GAS at the ratio of 1:1 and they can be converted with each other freely.",
        spend: "Amount you will spent : ",
        receive: "Amount you will receive : ",
        warnmsg: "Insufficient balance.",
        waittitle: "Waiting for transaction records",
        balance: "Balance",
        amount: "Amount"
    },
    myneoname: {
        title: "My Neo Name",
        resolver: "Address Resolver",
        mapping: "Address Mapping",
        time: "Expiration Time",
        expiring: "Expiring soon",
        edittitle: "Edit information",
        neoname: "Neo Name",
        notconfigure: "not configured",
        expired: "Expired"
    },
    bonus: {
        title1: "Bonus",
        title2: "History",
        msg: "SGas available to claim",
        wait1: "Sending a transaction...",
        wait2: "Waiting for confirmation of transfer...",
        wait3: "SGas claiming...",
        wait4: "Your SGas claim is successful!"
    }
}