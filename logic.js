var NameArray = [];
var LandDataArray = [];


async function GetLandData() {

  var url = "https://axieinfinity.com/graphql-server-v2/graphql";
  var TempLandDataArray = [];
    
  var Size = 100;
  var From = 0;

  await  fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
          
    body: JSON.stringify({
      "operationName":"GetLandsGrid",
        /*"variables":{
          "from":From,
          "size":Size,
          "sort":"PriceAsc",
          "auctionType":"All",
          "owner":null,
          "criteria":{"landType":[]}
        },  */
        "query":"query GetLandsGrid{ "+
          "\n part1:lands(from:0,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part2:lands(from:100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part3:lands(from:200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part4:lands(from:300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part5:lands(from:400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part6:lands(from:500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part7:lands(from:600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part8:lands(from:700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part9:lands(from:800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part10:lands(from:900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part11:lands(from:1000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part12:lands(from:1100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part13:lands(from:1200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part14:lands(from:1300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part15:lands(from:1400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part16:lands(from:1500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part17:lands(from:1600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part18:lands(from:1700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part19:lands(from:1800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part20:lands(from:1900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part21:lands(from:2000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part22:lands(from:2100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part23:lands(from:2200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part24:lands(from:2300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part25:lands(from:2400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part26:lands(from:2500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part27:lands(from:2600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part28:lands(from:2700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part29:lands(from:2800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part30:lands(from:2900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part31:lands(from:3000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part32:lands(from:3100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part33:lands(from:3200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part34:lands(from:3300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part35:lands(from:3400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part36:lands(from:3500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part37:lands(from:3600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part38:lands(from:3700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part39:lands(from:3800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part40:lands(from:3900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part41:lands(from:4000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part42:lands(from:4100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part43:lands(from:4200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part44:lands(from:4300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part45:lands(from:4400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part46:lands(from:4500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part47:lands(from:4600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part48:lands(from:4700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part49:lands(from:4800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part50:lands(from:4900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part51:lands(from:5000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part52:lands(from:5100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part53:lands(from:5200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part54:lands(from:5300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part55:lands(from:5400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part56:lands(from:5500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part57:lands(from:5600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part58:lands(from:5700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part59:lands(from:5800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part60:lands(from:5900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part61:lands(from:6000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part62:lands(from:6100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part63:lands(from:6200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part64:lands(from:6300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part65:lands(from:6400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part66:lands(from:6500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part67:lands(from:6600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part68:lands(from:6700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part69:lands(from:6800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part70:lands(from:6900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part71:lands(from:7000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part72:lands(from:7100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part73:lands(from:7200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part74:lands(from:7300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part75:lands(from:7400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part76:lands(from:7500,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part77:lands(from:7600,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part78:lands(from:7700,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part79:lands(from:7800,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part80:lands(from:7900,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part81:lands(from:8000,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part82:lands(from:8100,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part83:lands(from:8200,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part84:lands(from:8300,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part85:lands(from:8400,size:100,sort:PriceAsc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n}\n\n fragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n    ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
  })
  .then(function(response) { 
      return response.json(); 
  })
      
  .then(function(data) {
    console.log(data);
    TempLandDataArray.push(data);
  });

  await  fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
          
    body: JSON.stringify({
      "operationName":"GetLandsGrid",
        /*"variables":{
          "from":From,
          "size":Size,
          "sort":"PriceAsc",
          "auctionType":"All",
          "owner":null,
          "criteria":{"landType":[]}
        },  */
        "query":"query GetLandsGrid{ "+
        "\n part1:lands(from:0,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part2:lands(from:100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part3:lands(from:200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part4:lands(from:300,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part5:lands(from:400,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part6:lands(from:500,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part7:lands(from:600,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part8:lands(from:700,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part9:lands(from:800,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part10:lands(from:900,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part11:lands(from:1000,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part12:lands(from:1100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part13:lands(from:1200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part14:lands(from:1300,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part15:lands(from:1400,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part16:lands(from:1500,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part17:lands(from:1600,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part18:lands(from:1700,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part19:lands(from:1800,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part20:lands(from:1900,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part21:lands(from:2000,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part22:lands(from:2100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part23:lands(from:2200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part24:lands(from:2300,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part25:lands(from:2400,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part26:lands(from:2500,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part27:lands(from:2600,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part28:lands(from:2700,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part29:lands(from:2800,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part30:lands(from:2900,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part31:lands(from:3000,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part32:lands(from:3100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part33:lands(from:3200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part34:lands(from:3300,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part35:lands(from:3400,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part36:lands(from:3500,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part37:lands(from:3600,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part38:lands(from:3700,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part39:lands(from:3800,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part40:lands(from:3900,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part41:lands(from:4000,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part42:lands(from:4100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part43:lands(from:4200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part44:lands(from:4300,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part45:lands(from:4400,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part46:lands(from:4500,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part47:lands(from:4600,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part48:lands(from:4700,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part49:lands(from:4800,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part50:lands(from:4900,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part51:lands(from:5000,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part52:lands(from:5100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part53:lands(from:5200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part54:lands(from:5300,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part55:lands(from:5400,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part56:lands(from:5500,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part57:lands(from:5600,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part58:lands(from:5700,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part59:lands(from:5800,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part60:lands(from:5900,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part61:lands(from:6000,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part62:lands(from:6100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part63:lands(from:6200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part64:lands(from:6300,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part65:lands(from:6400,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part66:lands(from:6500,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part67:lands(from:6600,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part68:lands(from:6700,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part69:lands(from:6800,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part70:lands(from:6900,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part71:lands(from:7000,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part72:lands(from:7100,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part73:lands(from:7200,size:100,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
        "\n part74:lands(from:7300,size:54,sort:PriceDesc,criteria:{landType:[]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n}\n\n fragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n    ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
  })
  .then(function(response) { 
      return response.json(); 
  })
      
  .then(function(data) {
    console.log(data);
    TempLandDataArray.push(data);
  });
 
  PartArrayMerger(TempLandDataArray);
  console.log(LandDataArray);
}

function PartArrayMerger(ArrayToMerge) {  //since ArrayToMerge (LandDataArray) is a public Arrya we need the JSON.parse(JSON.stringify()) method
  for(i=0; i<ArrayToMerge.length; i++) {
    for(j=0; j<85; j++) {
      if(i==1 && j==74) {   //break for the second loop, since that should be the max number of lands
        console.log("Break " + j);
        break;
      }
      var key = "part"+(j+1);
      for(k=0; k<ArrayToMerge[i].data[key].results.length; k++) {
        LandDataArray.push(ArrayToMerge[i].data[key].results[k]);
      }
    }
  }
}
  
  
function LeaderboardMaker(JSONData, IDList, Reihenfolge){
  
  var Owners = [];
  var OwnersLeaderboard = [];
  
  var LandNumber = null;
  var LoopNumber = 0;
  var LandText = "empty";
  
  LandNumber = JSONData.data.lands.total;  //works
  
  while(LoopNumber < LandNumber) {
    LandText = JSONData.data.lands.result[LoopNumber].owner;
    Owners.push(LandText);
    LoopNumber = LoopNumber + 1;
  }
  
  Owners.sort();
  
    
  var current = null;
  var cnt = 0;
  for (var i = 0; i < Owners.length; i++) {
    if (Owners[i] != current) {
      if (cnt > 0) {
        OwnersLeaderboard.push({amount : cnt, owner : current, LoomOwner : current});
      }
      current = Owners[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  if (cnt > 0) {
    OwnersLeaderboard.push({amount : cnt, owner : current, LoomOwner : current});
  }
  
  OwnersLeaderboard.sort((a,b) => b.amount - a.amount || a.owner - b.owner);
  
  ProfileNamer(OwnersLeaderboard, IDList, Reihenfolge);
  
}
  
  
async function ProfileNamer(Array, IDList, Reihenfolge) {
  
  var url = "https://axieinfinity.com/graphql-server/graphql"
  
  for(i=0; Array.length > i; i++) {
    var loomAddy = Array[i].owner;
    ethAddy = JSON.stringify(loomAddy);
    var FetchChecker = "NEIN";
    FetchChecker = "NEIN";
  
    for(m=0; NameArray.length > m; m++) {
      if(NameArray[m].Loom == Array[i].owner) {
        Array[i].owner = NameArray[m].Besitzer;
        FetchChecker = "JA";
        break;
      }
    }
  
    if(FetchChecker == "NEIN") {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        
        body: JSON.stringify({
          operationName:"GetProfileByLoomAddress",
          variables:{
            loomAddress:loomAddy
          },
          query:"query GetProfileByLoomAddress($loomAddress: String!) {\n  publicProfileWithLoomAddress(loomAddress: $loomAddress) {\n    ...Profile\n    __typename\n  }\n}\n\nfragment Profile on PublicProfile {\n  accountId\n  name\n  addresses {\n    ...Addresses\n    __typename\n  }\n  __typename\n}\n\nfragment Addresses on NetAddresses {\n  ethereum\n  tomo\n  loom\n  __typename\n}\n"})
      })
        
      .then(function(response) { 
        return response.json(); 
      })
   
      .then(function(data) {
        var realName = "";
        try {
          realName = data.data.publicProfileWithLoomAddress.name;
        }
        catch {
          realName = "No User Profile";
        }
        Array[i].owner = realName;
      });
    }
  }
  ListMaker(Array, IDList, Reihenfolge);
}
//--------------------------
var TotalPlotsOwned = [];
  
function ListMaker(Array, IDList, Reihenfolge) {

  document.getElementById(IDList).innerHTML = '<ol class="LL">' + Array.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " Plots owned by " + String(genesis["owner"]) + '</li>';
  }).join('') + '</ol>';

  var ChartChooser = "";
  if(IDList === "GList") {
    ChartChooser = "GChart";
  } else if(IDList === "MList") {
    ChartChooser = "MChart";
  } else if(IDList === "AList") {
    ChartChooser = "AChart";
  } else if(IDList === "FList") {
    ChartChooser = "FChart";
  } else if(IDList === "SList") {
    ChartChooser = "SChart";
  }

  ChartMaker(Array, ChartChooser);
  
  if(Reihenfolge === "Genesis"){
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Mystic");
  } else if(Reihenfolge === "Mystic") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Arctic");
  } else if(Reihenfolge === "Arctic") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Forest");
  } else if(Reihenfolge === "Forest") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    GetLandData("Savannah");
  } else if(Reihenfolge === "Savannah") {
    TotalPlotsOwned = TotalPlotsOwned.concat(Array);
    var L = document.getElementById("lds-hourglass");
    L.style.display = "none";
  }
  
  if(Reihenfolge === "Savannah") {
    TotalLeaderboardWriter(TotalPlotsOwned);
  }
  
}

function TotalLeaderboardWriter(ArrayAr) {
  console.log(ArrayAr);
    
  var MultiAddress = ArrayAr;
  var amount = [];

  MultiAddress.sort((a,b) => b.LoomOwner - a.LoomOwner);

  for(i=0; MultiAddress.length > i; i++) {
    if(i > 0) {
      if(MultiAddress[i].LoomOwner == MultiAddress[i-1].LoomOwner) {
        amount[amount.length - 1].amount = amount[amount.length - 1].amount + MultiAddress[i].amount;
      } else {
        amount.push({amount : MultiAddress[i].amount, owner : MultiAddress[i].owner, LoomOwner : MultiAddress[i].owner});
      }
    } else {
      amount.push({amount : MultiAddress[i].amount, owner : MultiAddress[i].owner, LoomOwner : MultiAddress[i].owner});
    }
  }

  amount.sort((a,b) => b.amount - a.amount || a.owner - b.owner);
  
  document.getElementById("TList").innerHTML = '<ol class="LL">' + amount.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " Plots owned by " + String(genesis["owner"]) + '</li>';
  }).join('') + '</ol>';

  ChartMaker(amount, 'TChart');
}

function ChartMaker(Array, WhichChart) {

  var RestMenge = 0;
  for(i=9; Array.length > i; i++) {
    RestMenge = RestMenge + Array[i].amount;
  }

  var GesamtMenge = 0;
  for(i=0; Array.length > i; i++) {
    GesamtMenge = GesamtMenge + Array[i].amount;
  }

  var ctx = document.getElementById(WhichChart);

  var TotalLand = 0;

  for(m=0; Array.length > m; m++){
    TotalLand = TotalLand + Array[m].amount;
  }

  var LandMenge = [Array[0].amount, Array[1].amount, Array[2].amount, Array[3].amount, Array[4].amount, Array[5].amount, Array[6].amount, Array[7].amount, Array[8].amount, RestMenge];
  var LandBesitzer = [Array[0].owner, Array[1].owner, Array[2].owner, Array[3].owner, Array[4].owner, Array[5].owner, Array[6].owner, Array[7].owner, Array[8].owner, "All other Players"];

  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: LandBesitzer,
      datasets: [{
          label: 'Axie Land',
          data: LandMenge,
          backgroundColor: [
            'rgba(0,104,55, 0.25)',
            'rgba(165,0,38, 0.25)',
            'rgba(26,152,80, 0.25)',
            'rgba(215,48,39, 0.25)',
            'rgba(102,189,99, 0.25)',
            'rgba(244,109,67, 0.25)',
            'rgba(166,217,106, 0.25)',
            'rgba(253,174,97, 0.25)',
            'rgba(217,239,139, 0.25)',
            'rgba(254,224,139, 0.25)'
          ],
          borderColor: [
            'rgba(0,104,55, 1)',
            'rgba(165,0,38, 1)',
            'rgba(26,152,80, 1)',
            'rgba(215,48,39, 1)',
            'rgba(102,189,99, 1)',
            'rgba(244,109,67, 1)',
            'rgba(166,217,106, 1)',
            'rgba(253,174,97, 1)',
            'rgba(217,239,139, 1)',
            'rgba(254,224,139, 1)'
          ],
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        position: 'top',
        fontSize: 17,
        fontFamily: 'Arial',
        text: "Total Amount: " + TotalLand
      },
      tooltips: {
        displayColors: false,
        callbacks: {
          afterLabel: function(tooltipItem, data) {
            var dataset = data['datasets'][0];
            var percent = Math.round((dataset['data'][tooltipItem['index']] / GesamtMenge) * 100)
            return '(' + percent + '%)';
          }
        },
      },
      responsive: false,
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#FFFFFF',
          boxWidth: 15,
          fontSize: 13
        }
      }
    }
  })

}



function GenerateMapV2() {

  LandDataArray.sort(function (a, b) {
    return a.col - b.col;
});
LandDataArray.sort(function (a, b) {
  return a.row - b.row;
});
console.log(LandDataArray);
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.scale(5,5);
  for(i=0; i<LandDataArray.length; i++) {
    
    var xCord = LandDataArray[i].col + 150;
    var yCord = LandDataArray[i].row + 150;
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    if(LandDataArray[i].landType == "Savannah") {
      ctx.fillStyle = "yellow";
    } else if(LandDataArray[i].landType == "Forest") {
      ctx.fillStyle = "green";
    } else if(LandDataArray[i].landType == "Arctic") {
      ctx.fillStyle = "Azure";
    } else if(LandDataArray[i].landType == "Mystic") {
      ctx.fillStyle = "blue";
    } else if(LandDataArray[i].landType == "Genesis") {
      ctx.fillStyle = "black";
    }
    /*
    if(MultiplierArray[i].InsideRiver == "No") {
      ctx.fillStyle = "gray";
    }
    if(MultiplierArray[i].InsideRiver == "Yes") {
      ctx.fillStyle = "red";
    }
    */
    
    ctx.fillRect(xCord, yCord, 1, 1);

  }
  console.log("ende");

}