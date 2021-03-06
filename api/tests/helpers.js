function nextElection(title) {
  const electionDates = {
    next: "11/3/2020",
    classOne: "11/5/2024",
    classTwo: "11/3/2020",
    classThree: "11/8/2022"
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

function firstElected({ roles }) {
  const chamber = roles[0].chamber;
  const found = roles.find(role => {
    role.chamber == !chamber;
  });
  const servedSince =
    found === undefined ? roles[roles.length - 1].start_date : found.start_date;
  return `Served in ${chamber} since ${servedSince}`;
}
const trentKellyData = {
  member_id: "K000388",

  first_name: "Trent",
  middle_name: "",
  last_name: "Kelly",
  suffix: null,
  date_of_birth: "1966-03-01",
  gender: "M",
  url: "https://trentkelly.house.gov",
  times_topics_url: "",
  times_tag: "",
  govtrack_id: "412673",
  cspan_id: "97322",
  votesmart_id: "156389",
  icpsr_id: "21561",
  twitter_account: "reptrentkelly",
  facebook_account: "reptrentkelly",
  youtube_account: null,
  crp_id: "N00037003",
  google_entity_id: "/m/013b9qgh",
  rss_url: null,
  in_office: true,
  current_party: "R",
  most_recent_vote: "2018-06-14",
  last_updated: "2018-06-14 17:01:27 -0400",
  roles: [
    {
      congress: "115",
      chamber: "House",
      title: "Representative",
      short_title: "Rep.",
      state: "MS",
      party: "R",
      leadership_role: null,
      fec_candidate_id: "H6MS01131",
      seniority: "4",
      district: "1",
      at_large: false,
      ocd_id: "ocd-division/country:us/state:ms/cd:1",
      start_date: "2017-01-03",
      end_date: "2019-01-03",
      office: "1721 Longworth House Office Building",
      phone: "202-225-4306",
      fax: null,
      contact_form: null,
      bills_sponsored: 7,
      bills_cosponsored: 146,
      missed_votes_pct: 0.51,
      votes_with_party_pct: 96.92,
      committees: [
        {
          name: "Committee on Agriculture",
          code: "HSAG",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSAG.json",
          side: "majority",
          title: "Member",
          rank_in_party: 20,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Committee on Armed Services",
          code: "HSAS",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSAS.json",
          side: "majority",
          title: "Member",
          rank_in_party: 28,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Committee on Small Business",
          code: "HSSM",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSSM.json",
          side: "majority",
          title: "Member",
          rank_in_party: 7,
          begin_date: "",
          end_date: "2019-01-03"
        }
      ],
      subcommittees: [
        {
          name: "Conservation and Forestry",
          code: "HSAG15",
          parent_committee_id: "HSAG",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSAG/subcommittees/HSAG15.json",
          side: "majority",
          title: "Member",
          rank_in_party: 8,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Livestock and Foreign Agriculture",
          code: "HSAG29",
          parent_committee_id: "HSAG",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSAG/subcommittees/HSAG29.json",
          side: "majority",
          title: "Member",
          rank_in_party: 7,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Military Personnel",
          code: "HSAS02",
          parent_committee_id: "HSAS",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSAS/subcommittees/HSAS02.json",
          side: "majority",
          title: "Member",
          rank_in_party: 8,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Readiness",
          code: "HSAS03",
          parent_committee_id: "HSAS",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSAS/subcommittees/HSAS03.json",
          side: "majority",
          title: "Member",
          rank_in_party: 10,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Tactical Air and Land Forces",
          code: "HSAS25",
          parent_committee_id: "HSAS",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSAS/subcommittees/HSAS25.json",
          side: "majority",
          title: "Member",
          rank_in_party: 7,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Investigations, Oversight and Regulations",
          code: "HSSM24",
          parent_committee_id: "HSSM",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSSM/subcommittees/HSSM24.json",
          side: "majority",
          title: "Chair",
          rank_in_party: 1,
          begin_date: "",
          end_date: "2019-01-03"
        },
        {
          name: "Economic Growth, Tax and Capital Access",
          code: "HSSM27",
          parent_committee_id: "HSSM",
          api_uri:
            "https://api.propublica.org/congress/v1/115/house/committees/HSSM/subcommittees/HSSM27.json",
          side: "majority",
          title: "Member",
          rank_in_party: 3,
          begin_date: "",
          end_date: "2019-01-03"
        }
      ]
    },
    {
      congress: "114",
      chamber: "House",
      title: "Representative",
      short_title: "Rep.",
      state: "MS",
      party: "R",
      leadership_role: null,
      fec_candidate_id: "H6MS01131",
      seniority: "2",
      district: "1",
      at_large: false,
      ocd_id: "ocd-division/country:us/state:ms/cd:1",
      start_date: "2015-06-09",
      end_date: "2017-01-03",
      office: null,
      phone: null,
      fax: null,
      contact_form: null,
      bills_sponsored: 2,
      bills_cosponsored: 79,
      missed_votes_pct: 2.85,
      votes_with_party_pct: 96.15,
      committees: [
        {
          name: "Committee on Agriculture",
          code: "HSAG",
          api_uri:
            "https://api.propublica.org/congress/v1/114/house/committees/HSAG.json",
          rank_in_party: 26,
          begin_date: "",
          end_date: "2017-01-03"
        },
        {
          name: "Committee on Small Business",
          code: "HSSM",
          api_uri:
            "https://api.propublica.org/congress/v1/114/house/committees/HSSM.json",
          rank_in_party: 12,
          begin_date: "",
          end_date: "2017-01-03"
        }
      ],
      subcommittees: []
    }
  ]
};

console.log(
  "2015-06-09" === firstElected(trentKellyData) ? "OK" : "ERROR - TRENT KELLY"
);

// nextElection()

//expect Representative to return "11/3/2020"
//expect Senator, 2nd Class to return "11/3/2020"
//expect Senator, 3rd Class to return "11/8/2022"
//expect Senator, 1st Class to return "11/5/2024"

console.log(
  "11/3/2020" === nextElection("Representative") ? "OK" : "ERROR REPRESENTATIVE"
);
console.log(
  "11/3/2020" === nextElection("Senator, 2nd Class")
    ? "OK"
    : "ERROR - Senator, 2nd Class"
);
console.log(
  "11/8/2022" === nextElection("Senator, 3rd Class")
    ? "OK"
    : "ERROR - Senator, 3rd Class"
);
console.log(
  "11/5/2024" === nextElection("Senator, 1st Class")
    ? "OK"
    : "ERROR - Senator, 1st Class"
);
