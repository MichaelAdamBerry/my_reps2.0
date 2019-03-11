const keys = require("./keys");
const axios = require("axios");
const fs = require("fs");

const P_KEY = keys.PKEY();
const url = `https://api.propublica.org/congress/v1/116/senate/members.json`;

const getSenators = async () => {
  const data = await axios(url, {
    headers: { "X-API-Key": P_KEY }
  });
  const arr = await data.data.results[0];
  const senateData = [];
  fs.appendFile("senate-116.json", "[", function(err) {
    if (err) throw err;
    console.log("Saved!");
  });
  arr.members.forEach(el => {
    let name = `${el.first_name} ${el.last_name}`;
    let id = el.id;
    let state = el.state;
    let obj = { state: state, id: id, name: name };
    senateData.push({ state: state, id: id, name: name });
    jsonStr = JSON.stringify(obj, null, 2);
    fs.appendFile("senate-116.json", `${jsonStr},`, function(err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });
  fs.appendFile("senate-116.json", "]", function(err) {
    if (err) throw err;
    console.log("Saved!");
  });

  console.log(senateData);
  return senateData;
};

getSenators();
