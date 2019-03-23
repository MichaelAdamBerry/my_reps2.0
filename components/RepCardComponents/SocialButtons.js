import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function SocialButtons(props) {
  const svgStyle = {
    height: "16px",
    width: "16px",
    color: "var(--red-accent)"
  };
  return (
    <div className="socialContainer">
      <div>
        <a
          target="_blank"
          href={`https://twitter.com/${props.twitter_account}`}>
          <FontAwesomeIcon icon={["fab", "twitter"]} style={svgStyle} />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href={`https://facebook.com/${props.facebook_account}`}>
          <FontAwesomeIcon icon={["fab", "facebook-f"]} style={svgStyle} />
        </a>
      </div>{" "}
      <div>
        <a
          target="_blank"
          href={`https://youtube.com/${props.youtube_account}`}>
          <FontAwesomeIcon icon={["fab", "youtube"]} style={svgStyle} />
        </a>
      </div>{" "}
      <style jsx>{`
        .socialContainer {
          display: flex;
          width: 100%;
          margin: auto;
          justify-content: start;
        }

        .socialContainer div {
          margin-right: 0.5em;
        }
      `}</style>
    </div>
  );
}

export default SocialButtons;
