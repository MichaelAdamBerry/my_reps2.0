import { fetchData } from "../api/districtSearch";
import Layout from "../components/MyLayout";
import {
  getCurrentHouseMember,
  getCurrentSenateMembers,
  getSpecificSenateMembers
} from "../api/repSearch";
import Rep from "../components/Rep";
import Footer from "../components/Footer";
import { Spring, config } from "react-spring";
import ActionButton from "../components/RepCardComponents/ActionButton";

const Find = props => {
  const { data, repArr } = props;
  const district = data.name.split(" ").join(" ");
  return (
    <Layout>
      <Spring
        from={{ marginTop: "800px", opacity: ".5" }}
        to={{ marginTop: "none", opacity: ".9" }}
        config={config.gentle}>
        {({ marginTop, opacity }) => (
          <>
            <div className="container">
              <div className="header bold">
                <span className="header-text">Find My Reps</span>
              </div>
              <div className="district bold">
                <h1>{district}</h1>
              </div>
              <div className="mobile-district bold">
                <h3>{district}</h3>
              </div>
              <div className="card-one">
                <Rep repObj={repArr[0]} order="one" />
              </div>
              <div className="card-two">
                <Rep repObj={repArr[1]} order="two" />
              </div>
              <div className="card-three">
                <Rep repObj={repArr[2]} order="three" />
              </div>
              <ActionButton />
            </div>
            <Footer />
            <style jsx>{`
              .container {
                margin: 0;
                width: 100vw;
                background: var(--site-white);
                display: grid;
                grid-column-gap: 4em;
                grid-row-gap: 1.5em;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                grid-template-rows: 50px 1fr 1fr 1fr 1fr;
              }

              .header-text {
                color: var(--site-white);
                text-align: left;
                margin-left: 3em;
                font-size: 17px;
                padding: 0.5em;
                font-size: 17px;
                display: flex;
              }

              .header span {
                z-index: 1;
                background-color: var(--red-accent);
              }

              .mobile-district {
                display: none;
              }
              .district {
                grid-row: 2/6;
                grid-column: 1/2;
                width: 150px;
                margin-top: 3em;
                text-align: -webkit-center;
              }
              .district h1 {
                -webkit-writing-mode: vertical-rl;
                -ms-writing-mode: tb-rl;
                writing-mode: vertical-rl;
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
                text-align: after;
                white-space: nowrap;
                color: var(--site-black);
                margin-top: ${marginTop};
                opacity: ${opacity};
              }

              .header {
                color: var(--site-white);
                display: flex;
                position: sticky;
                top: 0;
                z-index: 1000;
                margin: 0;
                width: 100%;
                background-color: var(--dark-blue);
                grid-row: 1/2;
                grid-column: 1 /6;
                height: 50px;
                justify-self: stretch;
                border-bottom: solid 5px #a38c78;
              }
              .card-one {
                grid-column: 2 / 3;
                grid-row: 2 / 4;
                width: 500px;
                max-height: 250px;
                min-height: 250px;
              }
              .card-two {
                grid-column: 2 / 3;
                grid-row: 4 / 6;
                width: 500px;
                min-height: 250px;
                max-height: 250px;

                align-self: baseline;
              }

              .card-three {
                grid-column: 3 / 4;
                grid-row: 2 / 5;

                max-height: 400px;
                min-height: 400px;
                max-width: 300px;
                justify-self: baseline;
              }
              .bold {
                font-family: "Roboto", sans-serif;
              }

              @media (min-width: 320px) and (max-width: 600px) {
                .container {
                  display: block;
                }
                .card-one,
                .card-two,
                .card-three {
                  margin: auto;
                }

                .mobile-district {
                  display: block;
                  text-align: center;
                }

                .district {
                  display: none;
                }

                .card-one,
                .card-two {
                  margin-top: 3em;
                  max-height: 450px;
                  min-height: 450px;
                  max-width: 300px;
                }
              }
            `}</style>
          </>
        )}
      </Spring>
    </Layout>
  );
};

Find.getInitialProps = async context => {
  const address = context.query.address;

  console.log("get initial props called with ");
  const testQuery = "424 rodney street, brooklyn ny, 11222";
  const data = await fetchData(address);
  const rep = await getCurrentHouseMember(data.state, data.district);
  const senURIs = await getCurrentSenateMembers(data.state);
  const senA = await getSpecificSenateMembers(senURIs[0]);
  const senB = await getSpecificSenateMembers(senURIs[1]);
  const repArr = [rep, senA.results[0], senB.results[0]];

  return { data, repArr, address };
};

export default Find;
