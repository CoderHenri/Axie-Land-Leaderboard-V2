var NameArray = [];

async function ReadTextFile() {
  NameArray = await AsyncTextReader();
  GetLandData('Genesis');
}

function AsyncTextReader() {
  return new Promise(function (resolve, reject) {
      var objXMLhttp = new XMLHttpRequest()
      objXMLhttp.open("GET", './Profile_Loom_Eth_Addresses.txt', true);
      objXMLhttp.send();
      objXMLhttp.onreadystatechange = function(){
      if (objXMLhttp.readyState == 4){
        if(objXMLhttp.status == 200) {
          var TestParse = objXMLhttp.responseText;
          TestParse = JSON.parse(TestParse);
          return resolve(TestParse);
        } else {
          return resolve("error");
        }
      }
    }
  });

}

function GetLandData(Reihenfolge) {

  var url = "https://axieinfinity.com/graphql-server/graphql";
    


  if(Reihenfolge === "Genesis") {
    GetGen(url, Reihenfolge);
  } else if(Reihenfolge === "Mystic") {
    GetMystic(url, Reihenfolge);
  } else if(Reihenfolge === "Arctic") {
    GetArctic(url, Reihenfolge);
  } else if(Reihenfolge === "Forest") {
    GetForest(url, Reihenfolge);
  } else if(Reihenfolge === "Savannah") {
    GetSavannah(url, Reihenfolge);
  } 
}
  
  
function GetGen(url, Reihenfolge){
    //Genesis
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
        
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":100,"sort":"PriceAsc","criteria":{"owner":null,"type":["Genesis"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
    
    .then(function(data) {
      LeaderboardMaker(data, 'GList', Reihenfolge);
  });
}
  
function GetMystic(url, Reihenfolge){
    //Mystic
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
        
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":2400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Mystic"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
  })
  .then(function(response) { 
    return response.json(); 
  })
    
  .then(function(data) { 
    LeaderboardMaker(data, 'MList', Reihenfolge);
  });
}
  
function GetArctic(url, Reihenfolge){
    //Arctic
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
        
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":3900,"sort":"PriceAsc","criteria":{"owner":null,"type":["Arctic"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
    
    .then(function(data) { 
      LeaderboardMaker(data, 'AList', Reihenfolge);
  });
}
  
function GetForest(url, Reihenfolge){
    //Forest
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
        
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":5400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Forest"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
    
    .then(function(data) { 
      LeaderboardMaker(data, 'FList', Reihenfolge);
  });
}
  
function GetSavannah(url, Reihenfolge){
    //Savannah
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
        
    body: JSON.stringify({
      "operationName":"GetLandsGrid","variables":{"from":0,"size":5400,"sort":"PriceAsc","criteria":{"owner":null,"type":["Savannah"]}},
      "query":"query GetLandsGrid($from: Int!, $size: Int!, $sort: LandsSortBy!, $criteria: LandsCriteria) {\n  lands(criteria: $criteria, from: $from, size: $size, sort: $sort) {\n    total\n    result {\n      ...LandBriefV2\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment LandBriefV2 on Land {\n  realTokenId\n  owner\n  landType\n  row\n  col\n  auction {\n    currentPrice\n    startingTimestamp\n    currentPriceUSD\n    __typename\n  }\n  __typename\n}\n"})
    })
    .then(function(response) { 
      return response.json(); 
    })
    
    .then(function(data) { 
      LeaderboardMaker(data, 'SList', Reihenfolge);
  });
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
}