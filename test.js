var data = {
    "channel": "ubf",
    "fabric": {
        "cas": [
          "ca1.test.cdac.in",
          "ca1.demo.cdac.in",
          "ca2.test.cdac.in"
         

        ],
        "peers": [
          "peer1.test.cdac.in",
          "peer2.test.cdac.in",
          "peer2.demo.cdac.in",
        
        ],
        "orderers": [
            "orderer1.cda.in"

        ],
        "settings": {
            "ca": {
                "FABRIC_LOGGING_SPEC": "INFO"
            },
            "peer": {
                "FABRIC_LOGGING_SPEC": "INFO"
            },
            "orderer": {
                "FABRIC_LOGGING_SPEC": "INFO"
            }
        },
       
        "netname": "ubf"
    }
}
let org1 = "test"
let org2 = "demo"
let NewDATAOrg1 = [{"name":org1}]
let NewDATAOrg2 = [{"name":org2}]
// const keys = Object.keys(data);
// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   console.log('before')
//   console.log(key, data[key]);
//   if(data[key]===org1)
//   console.log("yes")
//   else
//   console.log("no")
// }
let test1 =data.fabric.cas
let test2 = data.fabric.peers
// console.log(test1.length)
// console.log(test1)
for(let i =0;i<test1.length;i++){
    // console.log(test1[i])
    if(test1[i].match(org1)){
        NewDATAOrg1.push({["cas"+[i]]:test1[i]})
    }
    else{
        NewDATAOrg2.push({["cas"+[i]]:test1[i]})
    }
}
for(let i =0;i<test2.length;i++){
    // console.log(test2[i])
    if(test2[i].match(org1)){
        NewDATAOrg1.push({["peers" +[i]]:test2[i]})
    }
    else{
        NewDATAOrg2.push({["peers"+ [i]]:test2[i]})
    }
}
// Object.assign( ...NewDATAOrg1)
let finalObj = {}
for(let i = 0; i < NewDATAOrg1.length; i++ ) {
    // console.log(NewDATAOrg1[i])
    Object.assign(finalObj, NewDATAOrg1[i]);
  }
  console.log(finalObj)
// console.log(NewDATAOrg1)
// console.log(NewDATAOrg2)

//wokr      
// let test2 = "ca1.demo.com"
//  if(test2.match(org2)){
//     NewDATAOrg1.push(test2)
//  }
//  console.log(NewDATAOrg1)

// console.log("yes")
// if(test1 ===org1)
// console.log("yes")
// else
// console.log("no")



