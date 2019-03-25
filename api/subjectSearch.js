import fetch from "isomorphic-unfetch";
import { PKEY } from "../keys";

//getSubjectSlub takes a string and returns the slug that matches api and the input str

const P_KEY = PKEY();

export async function getSubjectSlug(str) {
  const url =
    "https://api.propublica.org/congress/v1/bills/subjects/search.json";
  try {
    const results = await fetch(`${url}?query=${str}`, {
      headers: { "X-API-Key": P_KEY }
    });
    const data = await results.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getBillsBySubject(slug) {
  const url = "https://api.propublica.org/congress/v1/bills/subjects";
  try {
    const results = await fetch(`${url}/${slug}.json`, {
      headers: { "X-API-Key": P_KEY }
    });
    const data = results.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
