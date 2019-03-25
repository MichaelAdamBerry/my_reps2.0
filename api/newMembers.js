import { PKEY } from "../keys";
import fetch from "isomorphic-unfetch";

const P_KEY = PKEY();

//future component to employ.
//TODO : Research how to get results > 20. Initial implementation returned only Republicans
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
