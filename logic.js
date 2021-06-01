var NameArray = [];
var LandDataArray = [];


async function GetLandData() {

  var url = "https://axieinfinity.com/graphql-server-v2/graphql";
  var TempLandDataArray = [];

  await  fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    },
          
    body: JSON.stringify({
      "operationName":"GetLandsGrid",

        "query":"query GetLandsGrid{ "+
          "\n part1:lands(from:0,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part2:lands(from:100,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part3:lands(from:200,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part4:lands(from:300,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part5:lands(from:400,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part6:lands(from:500,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part7:lands(from:600,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part8:lands(from:700,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part9:lands(from:800,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part10:lands(from:900,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part11:lands(from:1000,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part12:lands(from:1100,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part13:lands(from:1200,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part14:lands(from:1300,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part15:lands(from:1400,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part16:lands(from:1500,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part17:lands(from:1600,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part18:lands(from:1700,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part19:lands(from:1800,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part20:lands(from:1900,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part21:lands(from:2000,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part22:lands(from:2100,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part23:lands(from:2200,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part24:lands(from:2300,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part25:lands(from:2400,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part26:lands(from:2500,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part27:lands(from:2600,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part28:lands(from:2700,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part29:lands(from:2800,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part30:lands(from:2900,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part31:lands(from:3000,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part32:lands(from:3100,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part33:lands(from:3200,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part34:lands(from:3300,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part35:lands(from:3400,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part36:lands(from:3500,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part37:lands(from:3600,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part38:lands(from:3700,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part39:lands(from:3800,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part40:lands(from:3900,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part41:lands(from:4000,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part42:lands(from:4100,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part43:lands(from:4200,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part44:lands(from:4300,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part45:lands(from:4400,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part46:lands(from:4500,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part47:lands(from:4600,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part48:lands(from:4700,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part49:lands(from:4800,size:100,sort:PriceAsc,criteria:{landType:[Savannah]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n}\n\n fragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n    ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
  })
  .then(function(response) { 
      return response.json(); 
  })
      
  .then(function(data) {
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

        "query":"query GetLandsGrid{ "+
          "\n part1:lands(from:0,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part2:lands(from:100,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part3:lands(from:200,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part4:lands(from:300,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part5:lands(from:400,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part6:lands(from:500,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part7:lands(from:600,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part8:lands(from:700,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part9:lands(from:800,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part10:lands(from:900,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part11:lands(from:1000,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part12:lands(from:1100,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part13:lands(from:1200,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part14:lands(from:1300,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part15:lands(from:1400,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part16:lands(from:1500,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part17:lands(from:1600,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part18:lands(from:1700,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part19:lands(from:1800,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part20:lands(from:1900,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part21:lands(from:2000,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part22:lands(from:2100,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part23:lands(from:2200,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part24:lands(from:2300,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part25:lands(from:2400,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part26:lands(from:2500,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part27:lands(from:2600,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part28:lands(from:2700,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part29:lands(from:2800,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part30:lands(from:2900,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part31:lands(from:3000,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part32:lands(from:3100,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part33:lands(from:3200,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part34:lands(from:3300,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part35:lands(from:3400,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part36:lands(from:3500,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part37:lands(from:3600,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part38:lands(from:3700,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part39:lands(from:3800,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part40:lands(from:3900,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part41:lands(from:4000,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part42:lands(from:4100,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part43:lands(from:4200,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part44:lands(from:4300,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part45:lands(from:4400,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part46:lands(from:4500,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part47:lands(from:4600,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part48:lands(from:4700,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part49:lands(from:4800,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part50:lands(from:4900,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part51:lands(from:5000,size:100,sort:PriceAsc,criteria:{landType:[Forest]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n}\n\n fragment LandBriefV2 on LandPlot {\n  tokenId\n  owner\n  landType\n  row\n  col\n    ownerProfile {\n    name\n    __typename\n  }\n  __typename\n}\n"})
  })
  .then(function(response) { 
      return response.json(); 
  })
      
  .then(function(data) {
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

        "query":"query GetLandsGrid{ "+
          "\n part1:lands(from:0,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part2:lands(from:100,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part3:lands(from:200,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part4:lands(from:300,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part5:lands(from:400,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part6:lands(from:500,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part7:lands(from:600,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part8:lands(from:700,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part9:lands(from:800,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part10:lands(from:900,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part11:lands(from:1000,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part12:lands(from:1100,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part13:lands(from:1200,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part14:lands(from:1300,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part15:lands(from:1400,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part16:lands(from:1500,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part17:lands(from:1600,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part18:lands(from:1700,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part19:lands(from:1800,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part20:lands(from:1900,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part21:lands(from:2000,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part22:lands(from:2100,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part23:lands(from:2200,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part24:lands(from:2300,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part25:lands(from:2400,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part26:lands(from:2500,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part27:lands(from:2600,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part28:lands(from:2700,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part29:lands(from:2800,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part30:lands(from:2900,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part31:lands(from:3000,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part32:lands(from:3100,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part33:lands(from:3200,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part34:lands(from:3300,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part35:lands(from:3400,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part36:lands(from:3500,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part37:lands(from:3600,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part38:lands(from:3700,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part39:lands(from:3800,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part40:lands(from:3900,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part41:lands(from:4000,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part42:lands(from:4100,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part43:lands(from:4200,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part44:lands(from:4300,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part45:lands(from:4400,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part46:lands(from:4500,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part47:lands(from:4600,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part48:lands(from:4700,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part49:lands(from:4800,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part50:lands(from:4900,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part51:lands(from:5000,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part52:lands(from:5100,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part53:lands(from:5200,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part54:lands(from:5300,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part55:lands(from:5400,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part56:lands(from:5500,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part57:lands(from:5600,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part58:lands(from:5700,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part59:lands(from:5800,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
          "\n part60:lands(from:5900,size:100,sort:PriceAsc,criteria:{landType:[Arctic,Mystic,Genesis]}) {\n    total\n    results {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }"+
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
  LeaderboardMaker();
}

function PartArrayMerger(Array) {  //since ArrayToMerge (LandDataArray) is a public Arrya we need the JSON.parse(JSON.stringify()) method

  var ArrayToMerge = [];
  ArrayToMerge = Array;
  
  for(i=0; i<ArrayToMerge.length; i++) {
    for(j=0; j<100; j++) {
      var key = "part"+(j+1);
      
      if(typeof ArrayToMerge[i].data[key] === 'undefined') {   //break for the second loop, since that should be the max number of lands
        break;
      }
      
      for(k=0; k<ArrayToMerge[i].data[key].results.length; k++) {
        LandDataArray.push(ArrayToMerge[i].data[key].results[k]);
      }
    }
  }
}

//Owner is a Ronin Address!!
  
var ProfileStatsArray = [];
  
function LeaderboardMaker() {
  LandDataArray.sort((a,b) => b.owner - a.owner);
  console.log(LandDataArray);

  var Gen = 0;
  var Mys = 0;
  var Arc = 0;
  var For = 0;
  var Sav = 0;

  for(i=0; LandDataArray.length > i; i++) {
    if(i > 0) {
      if(LandDataArray[i].owner == LandDataArray[i-1].owner) {
        if(LandDataArray[i].landType === "Genesis"){
          Gen = Gen + 1;
          ProfileStatsArray[ProfileStatsArray.length - 1].Genesis = Gen;
        } else if(LandDataArray[i].landType === "Mystic") {
          Mys = Mys + 1;
          ProfileStatsArray[ProfileStatsArray.length - 1].Mystic = Mys;
        } else if(LandDataArray[i].landType === "Arctic") {
          Arc = Arc + 1;
          ProfileStatsArray[ProfileStatsArray.length - 1].Arctic = Arc;
        } else if(LandDataArray[i].landType === "Forest") {
          For = For + 1;
          ProfileStatsArray[ProfileStatsArray.length - 1].Forest = For;
        } else if(LandDataArray[i].landType === "Savannah") {
          Sav = Sav + 1;
          ProfileStatsArray[ProfileStatsArray.length - 1].Savannah = Sav;
        }
      } else {
        Gen = 0;
        Mys = 0;
        Arc = 0;
        For = 0;
        Sav = 0;
        if(LandDataArray[i].landType === "Genesis"){
          Gen = 1;
        } else if(LandDataArray[i].landType === "Mystic") {
          Mys = 1;
        } else if(LandDataArray[i].landType === "Arctic") {
          Arc = 1;
        } else if(LandDataArray[i].landType === "Forest") {
          For = 1;
        } else if(LandDataArray[i].landType === "Savannah") {
          Sav = 1;
        }
        ProfileStatsArray.push({Owner:LandDataArray[i].owner, Profile:LandDataArray[i].ownerProfile.name, Genesis:Gen, Mystic:Mys, Arctic:Arc, Forest:For, Savannah:Sav});
      }
    } else {
      Gen = 0;
      Mys = 0;
      Arc = 0;
      For = 0;
      Sav = 0;
      if(LandDataArray[i].landType === "Genesis"){
        Gen = 1;
      } else if(LandDataArray[i].landType === "Mystic") {
        Mys = 1;
      } else if(LandDataArray[i].landType === "Arctic") {
        Arc = 1;
      } else if(LandDataArray[i].landType === "Forest") {
        For = 1;
      } else if(LandDataArray[i].landType === "Savannah") {
        Sav = 1;
      }
      ProfileStatsArray.push({Owner:LandDataArray[i].owner, Profile:LandDataArray[i].ownerProfile.name, Genesis:Gen, Mystic:Mys, Arctic:Arc, Forest:For, Savannah:Sav});
    }
  }
  console.log(ProfileStatsArray);

  ListMaker(ProfileStatsArray);
}
  
function ListMaker(Array) {

  var TotalList = [];
  for(i=0; Array.length > i; i++) {
    var Menge = Array[i].Genesis + Array[i].Mystic + Array[i].Arctic + Array[i].Forest + Array[i].Savannah;
    if(Menge == 1) {var Sentence = "Plot";} else {Sentence = "Plots";}
    TotalList.push({Owner:Array[i].Owner, Profile:Array[i].Profile, amount:Menge, SenPlot:Sentence});
  }
  TotalList.sort((a,b) => b.amount - a.amount);
  document.getElementById("TList").innerHTML = '<ol class="LL">' + TotalList.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " " + String(genesis["SenPlot"]) + " owned by " + String(genesis["Profile"]) + '</li>';
  }).join('') + '</ol>';
  ChartMaker(TotalList, "TChart");
  

  var GenesisList = [];
  for(i=0; Array.length > i; i++) {
    var Menge = Array[i].Genesis;
    if(Menge == 0) {continue;}
    if(Menge == 1) {var Sentence = "Plot";} else {Sentence = "Plots";}
    GenesisList.push({Owner:Array[i].Owner, Profile:Array[i].Profile, amount:Menge, SenPlot:Sentence});
  }
  GenesisList.sort((a,b) => b.amount - a.amount);
  document.getElementById("GList").innerHTML = '<ol class="LL">' + GenesisList.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " " + String(genesis["SenPlot"]) + " owned by " + String(genesis["Profile"]) + '</li>';
  }).join('') + '</ol>';
  ChartMaker(GenesisList, "GChart");


  var MysticList = [];
  for(i=0; Array.length > i; i++) {
    var Menge = Array[i].Mystic;
    if(Menge == 0) {continue;}
    if(Menge == 1) {var Sentence = "Plot";} else {Sentence = "Plots";}
    MysticList.push({Owner:Array[i].Owner, Profile:Array[i].Profile, amount:Menge, SenPlot:Sentence});
  }
  MysticList.sort((a,b) => b.amount - a.amount);
  document.getElementById("MList").innerHTML = '<ol class="LL">' + MysticList.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " " + String(genesis["SenPlot"]) + " owned by " + String(genesis["Profile"]) + '</li>';
  }).join('') + '</ol>';
  ChartMaker(MysticList, "MChart");


  var ArcticList = [];
  for(i=0; Array.length > i; i++) {
    var Menge = Array[i].Arctic;
    if(Menge == 0) {continue;}
    if(Menge == 1) {var Sentence = "Plot";} else {Sentence = "Plots";}
    ArcticList.push({Owner:Array[i].Owner, Profile:Array[i].Profile, amount:Menge, SenPlot:Sentence});
  }
  ArcticList.sort((a,b) => b.amount - a.amount);
  document.getElementById("AList").innerHTML = '<ol class="LL">' + ArcticList.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " " + String(genesis["SenPlot"]) + " owned by " + String(genesis["Profile"]) + '</li>';
  }).join('') + '</ol>';
  ChartMaker(ArcticList, "AChart");


  var ForestList = [];
  for(i=0; Array.length > i; i++) {
    var Menge = Array[i].Forest;
    if(Menge == 0) {continue;}
    if(Menge == 1) {var Sentence = "Plot";} else {Sentence = "Plots";}
    ForestList.push({Owner:Array[i].Owner, Profile:Array[i].Profile, amount:Menge, SenPlot:Sentence});
  }
  ForestList.sort((a,b) => b.amount - a.amount);
  document.getElementById("FList").innerHTML = '<ol class="LL">' + ForestList.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " " + String(genesis["SenPlot"]) + " owned by " + String(genesis["Profile"]) + '</li>';
  }).join('') + '</ol>';
  ChartMaker(ForestList, "FChart");


  var SavannahList = [];
  for(i=0; Array.length > i; i++) {
    var Menge = Array[i].Savannah;
    if(Menge == 0) {continue;}
    if(Menge == 1) {var Sentence = "Plot";} else {Sentence = "Plots";}
    SavannahList.push({Owner:Array[i].Owner, Profile:Array[i].Profile, amount:Menge, SenPlot:Sentence});
  }
  SavannahList.sort((a,b) => b.amount - a.amount);
  document.getElementById("SList").innerHTML = '<ol class="LL">' + SavannahList.map(function (genesis) {
    return '<li>' + String(genesis["amount"]) + " " + String(genesis["SenPlot"]) + " owned by " + String(genesis["Profile"]) + '</li>';
  }).join('') + '</ol>';
  ChartMaker(SavannahList, "SChart");

  var L = document.getElementById("lds-hourglass");
  L.style.display = "none";
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
  var LandBesitzer = [Array[0].Profile, Array[1].Profile, Array[2].Profile, Array[3].Profile, Array[4].Profile, Array[5].Profile, Array[6].Profile, Array[7].Profile, Array[8].Profile, "All other Players"];

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

//function to test fetched land

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