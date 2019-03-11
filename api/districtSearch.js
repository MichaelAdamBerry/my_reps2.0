import { GKEY } from "../keys";
import axios from "axios";

const G_KEY = GKEY();
console.log(GKEY);

const formatAddress = userInput => {
  const formatted = encodeURIComponent(userInput);
  return formatted;
};

const getStateFromString = string => {
  const re1 = ".*?";
  const re2 =
    "((?:(?:AL)|(?:AK)|(?:AS)|(?:AZ)|(?:AR)|(?:CA)|(?:CO)|(?:CT)|(?:DE)|(?:DC)|(?:FM)|(?:FL)|(?:GA)|(?:GU)|(?:HI)|(?:ID)|(?:IL)|(?:IN)|(?:IA)|(?:KS)|(?:KY)|(?:LA)|(?:ME)|(?:MH)|(?:MD)|(?:MA)|(?:MI)|(?:MN)|(?:MS)|(?:MO)|(?:MT)|(?:NE)|(?:NV)|(?:NH)|(?:NJ)|(?:NM)|(?:NY)|(?:NC)|(?:ND)|(?:MP)|(?:OH)|(?:OK)|(?:OR)|(?:PW)|(?:PA)|(?:PR)|(?:RI)|(?:SC)|(?:SD)|(?:TN)|(?:TX)|(?:UT)|(?:VT)|(?:VI)|(?:VA)|(?:WA)|(?:WV)|(?:WI)|(?:WY)))(?![a-z])"; // US State
  const expression = new RegExp(re1 + re2, ["i"]);
  const results = expression.exec(string);
  if (results != null) {
    const state = results[1];
    return state;
  }
};

const getDistrictFromString = string => {
  const re1 = ".*?"; // Non-greedy match on filler
  const re2 = "(\\d+)"; // Integer Number 1
  const expression = new RegExp(re1 + re2, ["i"]);
  const results = expression.exec(string);
  if (results != null) {
    const result = results[1].toString();
    return result;
  }
};

const parseDivisionAndState = divisionId => {
  let district = `${getDistrictFromString(divisionId)}/`;
  let state = `${getStateFromString(divisionId).toUpperCase()}/`;
  const dataObj = { state, district };
  return dataObj;
};

const fetchData = async userInput => {
  try {
    const address = formatAddress(userInput);
    const url = `https://www.googleapis.com/civicinfo/v2/representatives?address=${address}&levels=country&roles=legislatorLowerBody&key=${G_KEY}`;
    const response = await axios.get(url);
    const { divisionId } = response.data.offices[0];
    const districtObj = await parseDivisionAndState(divisionId);
    const divisionObj = response.data.divisions[divisionId];
    districtObj.name = divisionObj.name;
    return districtObj;
  } catch (error) {
    return false;
  }
};

module.exports = {
  fetchData: fetchData
};
