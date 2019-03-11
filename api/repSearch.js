import { PKEY } from "../keys";
import fetch from "isomorphic-unfetch";
import axios from "axios";

const P_KEY = PKEY();

const urls = {
  proPublica: {
    main: "https://api.propublica.org/congress/",
    reps: "https://api.propublica.org/congress/v1/members/",
    hearings: "https://api.propublica.org/congress/v1/",
    senatorLookup: "https://api.propublica.org/congress/v1/members/senate/",
    congressPersonLookup:
      "https://api.propublica.org/congress/v1/members/house/"
  }
};
export async function getRecentCommitteeHearings(congress, chamber, code) {
  try {
    const { hearings } = urls.proPublica;
    const formattedChamber = chamber.toLowerCase();
    const url =
      hearings +
      congress +
      "/" +
      formattedChamber +
      "/committees/" +
      code +
      "/hearings.json";
    const results = await fetch(url, {
      headers: { "X-API-Key": P_KEY }
    });
    const data = results.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getRepsRecentVotes(member_id) {
  try {
    const { reps } = urls.proPublica;
    const results = await fetch(reps + member_id + "/votes.json", {
      headers: { "X-API-Key": P_KEY }
    });
    const data = await results.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getRepsSponsoredBills(member_id) {
  try {
    const { reps } = urls.proPublica;
    const results = await fetch(reps + member_id + "/bills/cosponsored.json", {
      headers: { "X-API-Key": P_KEY }
    });
    const data = results.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCurrentSenateMembers(userState) {
  const { senatorLookup } = urls.proPublica;
  //returns array of api_uri for each senator to be called for more detailed data
  try {
    const currentSenateMembersURL = senatorLookup + userState + "current.json";
    const senatorResults = await axios.get(currentSenateMembersURL, {
      headers: { "X-API-Key": P_KEY }
    });
    const uris = [];
    await Promise.all(
      senatorResults.data.results.map(async senator => {
        return uris.push(senator.api_uri);
      })
    );
    return uris;
  } catch (err) {
    console.log(err);
  }
}

export async function getSpecificSenateMembers(uri) {
  try {
    const results = await fetch(uri, {
      headers: { "X-API-Key": P_KEY }
    });
    const data = await results.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCurrentHouseMember(userState, userDistrict) {
  try {
    const { congressPersonLookup } = urls.proPublica;
    const url =
      congressPersonLookup + userState + userDistrict + "current.json";
    const member = await axios.get(url, {
      headers: { "X-API-Key": P_KEY }
    });
    const uri = member.data.results[0].api_uri;
    const represtativeData = await axios.get(uri, {
      headers: { "X-API-Key": P_KEY }
    });
    return represtativeData.data.results[0];
  } catch (err) {
    console.warn(err);
  }
}

export async function getBillSubject(congress, bill_id) {
  try {
    const getSubjectUrl = `${
      urls.proPublica.main
    }v1/${congress}/bills/${bill_id}/subjects.json`;
    const results = await fetch(getSubjectUrl, {
      headers: { "X-API-Key": P_KEY }
    });
    const data = await results.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
