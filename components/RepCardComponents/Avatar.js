import { Spring } from "react-spring";
import React from "react";
import Badge from "./Badge";

class Avatar extends React.Component {
  render() {
    const { twitter_id, id, width, hovered, title } = this.props;
    const twitterAvatarUrl = `https://avatars.io/twitter/${twitter_id}`;
    const photoUrl = `https://theunitedstates.io/images/congress/450x550/${id}.jpg`;
    const url = twitter_id ? twitterAvatarUrl : photoUrl;
    let row;
    if (this.props.width === "300px") {
      row = "3";
    } else {
      row = "2";
    }
    return (
      <Spring
        to={{
          scale: hovered ? "1.1" : "1",
          opacity: hovered ? "1" : "0.9"
        }}>
        {({ scale, opacity }) => (
          <>
            <div className="thumbnail">
              <img className="avatar" src={url} alt="Profile Pic" />
            </div>
            <Badge title={title} row={row} />
            <style jsx>
              {`
                .thumbnail {
                  cursor: pointer;
                  height: 250px;
                  width: ${width};
                  grid-column: 1/2;
                  grid-row: 1/3;
                  justify-self: center;
                  z-index: 2;
                  overflow: hidden;
                }
                .thumbnail img {
                  width: ${width};
                  height: ${width};
                  opacity: ${opacity};
                  transform: scale3d(${scale}, ${scale}, ${scale});
                }
                @media (min-width: 320px) and (max-width: 600px) {
                  .thumbnail {
                    width: 300px;
                  }
                  .thumbnail img {
                    height: 300px;
                    width: 300px;
                  }
                }
              `}
            </style>
          </>
        )}
      </Spring>
    );
  }
}

export default Avatar;
