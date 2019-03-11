import { PKEY } from "../keys";
import fetch from "isomorphic-unfetch";

const P_KEY = PKEY();

export async function getNewMembers() {
  try {
    const url = "https://api.propublica.org/congress/v1/members/new.json";
    const results = await fetch(url, { headers: { "X-API-Key": P_KEY } });
    const data = await results.json();
    return data.results[0].members;
  } catch (err) {
    console.log(err);
  }
}
