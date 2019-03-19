import SocialButtons from "../components/RepCardComponents/SocialButtons";

export default props => {
  return (
    <div className="footer">
      <div className="connect col">
        <h3 className="subHeader bold">CONNECT</h3>
        <SocialButtons
          twitter_account="https://twitter.com/propublica"
          facebook_account="https://www.facebook.com/propublica/"
          youtube_account="https://www.youtube.com/user/propublica"
        />
      </div>
      <div className="learnMore col">
        <h3 className="subHeader bold">MORE FROM PROPUBLICA</h3>
        <ul>
          <li>
            <a href="https://www.propublica.org/">the front page</a>
          </li>
          <li>
            <a href="https://projects.propublica.org/graphics/users-guide-to-democracy">
              user's guide to democracy
            </a>
          </li>
          <li>
            <a href="https://www.propublica.org/electionland/">electionland</a>
          </li>
          <li>
            <a href="https://www.propublica.org/datastore/">data store</a>
          </li>
        </ul>
      </div>
      <div className="getInvolved col">
        <h3 className="subHeader bold">GET INVOLVED</h3>
        <ul>
          <li>
            <a href="https://5calls.org/">5 Calls</a>
          </li>
          <li>
            <a href="https://swingleft.org/">swing left</a>
          </li>
          <li>
            <a href="https://www.mediamatters.org/">media matters</a>
          </li>
        </ul>
      </div>
      <div className="quote">
        <p>
          "The first requisite of a good citizen in this republic of ours is
          that he shall be able and willing to pull his own weight." ~ Theodore
          Roosevelt
        </p>
      </div>

      <style jsx>{`
        .footer {
          font-family: "Noto Serif TC", serif;
          width: 100%;
          background-color: #2f2f2f;
          display: grid;
          row-gap: 20px;
          min-height: 188px;
          justify-content: space-around;
          padding: 50px 0;
          margin-top: 3em;
          grid-template-columns: .5fr 1fr 1fr 1fr .5fr;
          grid-template-rows: 1fr 40px;
          border-top: solid 5px #a38c78;
        }

        .footer li {
          list-style: none;
        }

        ul {
          padding-inline-start: 0;
        }

        a {
          font-size: smaller;
          color: white;
          text-decoration-style: none;
        }

        .col {
          justify-items: start;
          justify-self: center;
        }
        .connect {
          grid-column: 2;
          grid-row: 1;
        }
        .learnMore {
          grid-column: 3;
          grid-row: 1;
        }
        .getInvolved {
          grid-column: 4;
          grid-row: 1;
        }
        .quote {
            grid-column: 2/5; 
            grid-row: 2;
            justify-self: center;
            color: lightgray;
            font-size: 12px;
            font-style: italic;
        }

        a button {
        margin-left:75px;
        font-size: large;
        height: 45px;
        width: 150px;
        background-color: #ffffff
        color: black;
        cursor: pointer;
        }

        .subHeader {
          color: white;
        }

        @media (min-width: 320px) and (max-width: 500px) {
            .footer {
                display: block;
                margin: auto;
            }
            .footer > div {
                margin-left: 2em;
            }

            
            
            
          }
      `}</style>
    </div>
  );
};
