import Layout from "../components/MyLayout";
import Footer from "../components/Footer";
import SearchModal from "../components/SearchModal";
import { Spring, config } from "react-spring";
import Underline from "../components/RepCardComponents/Underline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

class Index extends React.Component {
  state = { clicked: false };
  setClicked = () => this.setState({ clicked: true });
  cancelClicked = () => this.setState({ clicked: false });
  renderModal = () =>
    this.state.clicked && <SearchModal modalClose={this.cancelClicked} />;
  render() {
    const { clicked } = this.state;
    const renderUnderLine = () => <Underline hovered={true} />;
    return (
      <Spring
        from={{ opacity: "0" }}
        to={{ opacity: "1" }}
        config={config.molasses}>
        {({ opacity }) => (
          <Layout>
            {this.renderModal()}
            <div
              className="index-container"
              style={{ opacity }}
              onClick={this.setClicked}>
              <div className="two bold">
                <Underline text="Find" />
                <Underline text="Follow" />
                <Underline text="Connect" />
              </div>
              <div className=" one">
                <div className="info">
                  <h3 className="bold">
                    Study Shows 37% of Americans Can't name their US
                    Representative
                  </h3>
                  <p>
                    Study by{" "}
                    <a href="https://www.haveninsights.com/just-37-percent-name-representative/">
                      Haven Insights
                    </a>{" "}
                    Shows an Electorate Increasingly Distanced From Their
                    Representatives
                  </p>

                  <ul>
                    <li>
                      While just over half (56%) of Americans know their
                      Representative’s party affiliation, only one-third (37%)
                      know their Representative’s name{" "}
                    </li>
                    <li>
                      Less than half of Americans can name their Representative,
                      yet 65% believe their Representative is overpaid.
                    </li>
                    <li>
                      Twenty-three percent of Americans who voted for a
                      Representative last November cannot name their current
                      Representative
                    </li>
                    <li />
                  </ul>
                </div>
              </div>
              <div className="line">
                {" "}
                <div className="line-title bold">
                  <p>Fnd My Reps</p>
                </div>
              </div>
              <div className="three">
                <div className="text-container">
                  <div>
                    <p className="bold">
                      Find your destrict and learn more about your Senators and
                      Congressperson.
                    </p>
                  </div>
                  <div className="attributions">
                    <div>
                      <p>
                        Powered by the Propublica Congress API & the Google
                        Civics API
                      </p>
                    </div>
                    <div>
                      <p>Made with React and Next.js</p>
                    </div>
                    <div className="img-container">
                      <img
                        src="../static/propublica-data-store.png"
                        alt="propbulica data store logo"
                        style={{ height: "20px", width: "auto" }}
                      />
                      <img
                        src="../static/google-civics-api.png"
                        alt="google api logo"
                        style={{ height: "20px", width: "auto" }}
                      />
                      <img
                        src="../static/react.png"
                        alt="react logo"
                        style={{ height: "20px", width: "auto" }}
                      />
                      <img
                        src="../static/nextjs.png"
                        alt="next.js api logo"
                        style={{ height: "20px", width: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-toggle">
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ height: "40px", width: "40px", cursor: "pointer" }}
                />
              </div>
            </div>
            <Footer />
            <style jsx>{`

          
   
          .search-btn {
            grid-column: 5;
            justify-self: start;
          }

          .mobile-toggle {
            display: none
          }

          .index-container { 
            display: grid;
            grid-gap: 30px; 
            width: 100%;
            cursor: pointer;
            color: var(--main-blue);
            grid-template-columns: 1fr 1fr 200px 200px 150px 1fr 1fr;
          }

          .logo {
            margin: auto;
            color: rgb(47, 47, 47);
            opacity: 0.8;
            height: 40px;
            color: #b12e2e;
            transform: rotate(10deg);
          }

          ul {
            list-style-type: none;
            padding-inline-start: 0;
            margin-inline-start: 10px;
            margin-inline-end: 10px;

          }

          li {
            margin-bottom: 1em;
          }

          .info {
            width: 100%;
            height: 100%;
            background-color: white;
            margin: auto;
            text-align: justify;
            font-size: 14.5px;
            padding: 3px;
          }

          .img-container {
            display: flex; 
            justify-content: space-around;
          }
          .info h3 {
            border-bottom: solid 2px;
            padding-bottom: 10px;
            padding-right: 1em;
            padding-left: 1em;
            color: var(--site-black);
          }

          .info p {
            font-style: italic;
            color: var(--light-blue);
            line-height: 1.5em;
            padding-left: 1.5em;
            padding-right: 1.5em;
          }

          .text-container {
            height: 98%;
            margin: 2%; 
            font-size: 22px;
            line-height: 1.5em; 
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }

        



          .line {
            grid-column: 2/3;
            grid-row: 2/6;
            border-right: solid 5px;
            display:flex; 
            flex-direction: column;
            justify-content: center;
            margin-right: 3em;
            color: var(--main-blue);
          }

          .line-title {
            font-size: larger;
            color: white;
            transform: rotate(270deg);
            background-color: var(--red-accent);
            white-space: nowrap;
            padding: 0 1em 0 1em;
          }

          .two {
            grid-column: 3 /5;
            grid-row: 3 / 5;
            background-color: var(--main-blue);
            z-index: 1;
            opacity: .8;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 27px;
          }

          .two div {
            margin-left: 2em;
          }

          .one {
            overflow: hidden;
            grid-column: 4 / 6;
            display: flex;
            grid-row: 2 / 4;
            z-index: 5;
          }

          .two , .three ,  .one {
            width: 350px;
            height: 350px;
          }
          .icon-container {
            display: flex; 
            flex-direction: column;
            justify-content: center;
          }
          .three {
            grid-column: 4 / 6;
            grid-row: 4 / 6;
            z-index: 1;
            opacity: .9;
            background-color: var(--red-accent);
            color: var(--site-black);
            box-shadow: 5px 5px 20px grey;
            display: flex; 
            flex-direction: column;
            justify-content: center;
          }
          .attributions {
            min-height: 100px;
            border-top: solid 1px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 13px;
            font-style: italic;
            color: var(--site-white);
          }
          .attributions p{
            margin-block-start: 3px; 
            margin-block-end: 3px;
            line-height: 1em;
          }
          .search-btn button {
            font-size: large;
            height: 45px;
            width: 150px;
            background-color: #ffffff
            color: black;
            cursor: pointer;
          }
          .logo{
            grid-column: -2; 
            margin-left: 50px;
            border-radius: 30px;
            height: 57px;
            width: 57px;
            margin-top: 10px;

          }
          .header {
            color: #eae4df;
            margin: 0;
            width: 100vw;
            height: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            align-items: center;
          }
          .site-title {
            grid-column: 2/5;
            justify-self: center;
          }

          .site-title h2, .site-title p {
            text-align: center;
            margin-block-start: 0;
            margin-block-end: 0;
          }

          @media (min-width: 320px) and (max-width: 480px) {
  
            .index-container {
              display: block; 
            }

            .line {
              width: 126px;
              position: fixed;
              top: 50px;
              z-index: 1;
              left: -20px;
              border: none;
              font-size: smaller;
            }

            .one, .three {
              margin: auto;
              margin-bottom: 20px;
              box-shadow: 5px 5px 20px gray;
            }

            .two {
              height: 125px;
              width: 100%; 
              margin-bottom: 20px;
              border-bottom: solid;
              background-color: #2f2f2f;
              position: sticky;
              top: 0;
              color: white;
              opacity: .9;
            }

            .two .container {
              display: flex;
              margin-left: 4em;
            }

             p {
              font-size: 17px;
              margin-block-end: 0;
              margin-block-start: 0;
            }
            .mobile-toggle {
              display: block;
              position: fixed;
              top: 20px;
              right: 20px;
              color: white;
              z-index: 1;
            }
          }
        `}</style>
          </Layout>
        )}
      </Spring>
    );
  }
}

export default Index;
