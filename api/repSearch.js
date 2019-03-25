import { PKEY } from "../keys";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import moment from "moment";

const P_KEY = PKEY();

//at this point we aren't using the hearingsl
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

//for future component focused on Legislative action
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

//for future component focused on representative's voting record
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

//future component -- fetches bills co sponsored by specific rep
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

export function firstElected({ roles }) {
  const chamber = roles[0].chamber;
  const found = roles.find(role => {
    role.chamber == !chamber;
  });
  const servedSince =
    found === undefined ? roles[roles.length - 1].start_date : found.start_date;
  return servedSince;
}

//TODO nextElection(startdate, role) should return the next election date for Rep

export function nextElection(title) {
  const electionDates = {
    next: "November 3rd, 2020",
    classOne: "November 5th, 2024",
    classTwo: "November 3rd, 2020",
    classThree: "November 8th, 2022"
  };
  if (title === "Representative") {
    return electionDates.next;
  }
  const senClass = title.split(",")[1].split("");
  if (senClass.includes("3")) {
    return electionDates.classThree;
  } else if (senClass.includes("2")) {
    return electionDates.classTwo;
  } else {
    return electionDates.classOne;
  }
}
