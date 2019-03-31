//the cover image of the main part of the page
//should change opacity and darken

import MainContent from "./MainContent";
import BgImage from "./BgImage";

export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }

  render() {
    return (
      <div>
        <div className="fixedImg">
          <BgImage opacity=".3" imgSrc="../static/washington-animation.jpg" />
        </div>
        <div className="scroll-text">
          <h3 className="bold">
            37% of Americans Can't name their US Representative
          </h3>
        </div>
        <BgImage
          opacity=".0"
          dark="true"
          imgSrc="../static/washington-animation.jpg">
          <div className="content-holder">
            <MainContent setClicked={this.props.setClicked} />
          </div>
        </BgImage>
        <style jsx>
          {`
            .content-holder {
              filter: brightness(1);
            }
            h3 {
              color: var(--dark-blue);
              font-size: 2em;
              text-align: center;
              line-height: 2em;
              margin: 0;
            }
            .scroll-text {
              min-height: 15vh;
              min-width: 100vw;
              background-color: var(--site-white);
            }

            @media (min-width: 320px) and (max-width: 480px) {
              h3 {
                position: absolute;
                color: var(--dark-blue);
                font-size: 1em;
                margin: 0.5em;
              }
              .content-holder {
                background-color: var(--site-black);
              }
              .fixedImg {
                display: none;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
