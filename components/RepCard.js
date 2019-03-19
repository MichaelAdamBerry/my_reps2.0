import Avatar from "./RepCardComponents/Avatar";
import Badge from "./RepCardComponents/Badge";
import RepName from "./RepCardComponents/RepName";
import moment from "moment";
import { Spring } from "react-spring";
import SocialButtons from "./RepCardComponents/SocialButtons";
export default class RepCard extends React.Component {
  state = { hovered: false };
  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });
  render() {
    const {
      title,
      party,
      name,
      district,
      twitter_id,
      facebook_account,
      youtube_account,
      id,
      toggleText,
      order,
      inOfficeSince
    } = this.props;
    const { hovered } = this.state;
    const demCardColor = "#3ac3f9";
    const repCardColor = "#ad3232";
    const cardColor = party === "D" ? demCardColor : repCardColor;
    const imgWidth = order === "three" ? "300px" : "250px";
    return (
      <Spring from={{ opacity: "0" }} to={{ opacity: "1" }} delay={100}>
        {({ opacity }) => (
          <div
            style={{ opacity: opacity }}
            onMouseOver={this.setHover}
            onMouseLeave={this.cancelHover}
            className={`card ${order}`}>
            <Avatar
              twitter_id={twitter_id}
              id={id}
              width={imgWidth}
              hovered={hovered}
              title={`US ${
                title
                  .toUpperCase()
                  .split(" ")[0]
                  .split(",")[0]
              }`}
            />
            <div className="info">
              <RepName name={name} hovered={hovered} />
              <h3 className="party bold">
                {party === "D" ? "DEMOCRACT" : "REPUBLICAN"}
              </h3>
              <div className="facts">
                <p>{`Served since ${moment(inOfficeSince).format(
                  "MMMM Do YYYY"
                )}`}</p>
                <p>{`Next election on`}</p>
              </div>
              <SocialButtons
                twitter_account={twitter_id}
                facebook_account={facebook_account}
                youtube_account={youtube_account}
              />
            </div>
            <style jsx>{`
              .card {
                color: #232323;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr 1fr;
                background-color: white;
                grid-template-columns: 1fr 1fr 1fr;
              }

              .party {
                color: #a38c78;
              }
              .info {
                grid-column: 2/4;
                grid-row: 1/4;
                font-size: 0.85em;
                margin-left: 1em;
                display: grid;
              }

              .three .info {
                grid-column: 1 / 2;
                grid-row: 3 /4;
                display: block;
                max-height: 150px;
              }

              .three .info h3,
              .three .info p {
                line-height: 0.5em;
              }

              .one .facts,
              .two .facts {
                line-height: 0.3em;
              }

              .one .info,
              .two .info {
                align-content: center;
              }

              .one .party,
              .two .party {
                margin-block-end: 0;
                margin-block-start: 0;
              }

              .one {
                grid-column: 2 / 3;
                grid-row: 2 / 4;
                width: 500px;
                max-height: 250px;
                min-height: 250px;
                margin-top: 3em;
              }
              .two {
                grid-column: 2 / 3;
                grid-row: 4 / 6;
                width: 500px;
                min-height: 250px;
                max-height: 250px;
                margin-top: 3em;
                align-self: baseline;
              }

              .three {
                grid-column: 3 / 4;
                grid-row: 2 / 5;
                margin-top: 3em;
                max-height: 400px;
                min-height: 400px;
                max-width: 300px;
                justify-self: baseline;
              }

              @media (min-width: 320px) and (max-width: 600px) {
                .one,
                .two {
                  grid-column: 3 / 4;
                  grid-row: 2 / 5;
                  margin-top: 3em;
                  max-height: 400px;
                  min-height: 400px;
                  max-width: 300px;
                  justify-self: baseline;
                  grid-template-columns: 1fr;
                  grid-template-rows: 1fr 1fr 1fr;
                }

                .one .info,
                .two .info {
                  grid-column: 1;
                  grid-row: 3;
                  display: block;
                  max-height: 150px;
                }
                .one .info h3,
                .one .info p,
                .two .info h3,
                .two .info p {
                  line-height: 0.5em;
                }
              }
            `}</style>
          </div>
        )}
      </Spring>
    );
  }
}
