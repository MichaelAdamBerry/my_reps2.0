import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function SocialButtons(props) {
  return (
    <div className="socialContainer">
      <div>
        <a
          target="_blank"
          href={`https://twitter.com/${props.twitter_account}`}>
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            style={{ height: "16px", width: "16px", color: "#bfafa0" }}
          />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href={`https://facebook.com/${props.facebook_account}`}>
          <FontAwesomeIcon
            icon={["fab", "facebook-f"]}
            style={{ height: "16px", width: "16px", color: "#bfafa0" }}
          />
        </a>
      </div>{" "}
      <div>
        <a
          target="_blank"
          href={`https://youtube.com/${props.youtube_account}`}>
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            style={{ height: "16px", width: "16px", color: "#bfafa0" }}
          />
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
