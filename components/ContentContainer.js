import MainContent from "./MainContent";
export default class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }

  render() {
    return (
      <div className="container">
        <div className="img-container">
          <img
            ref={this.imgRef}
            src="../static/washington-animation.jpg"
            alt="United States Capitol at Night"
          />
          <h3 className="bold">
            37% of Americans Can't name their US Representative
          </h3>
        </div>
        <div className="content-holder">
          <MainContent />
        </div>
        <style jsx>
          {`
            .container {
              min-height: 100vh;
              max-height: 100vh;
              overflow-y: scroll;
            }

            .content-holder {
              filter: brightness(1);
            }

            .img-container {
              width: 100vw;
              position: sticky;
              top: 0;
            }
            h3 {
                position: absolute;
                top: 60vh;
                color: white;
                font-size: 3.5em;
                margin: 1em;
            }}

            img {
              width: 100vw;
            }

            @media (min-width: 320px) and (max-width: 480px) {
                img {
                height: 100vh;
                width: auto;
                position: relative;
                top: 0;
                right: 326px;

                }

                h3 {

                    position: absolute;
                    top: 22vh;
                    color: white;
                    font-size: 3.5em;
                    margin: .5em;
                   
                 }

                .img-container {
                    overflow: hidden;
                    filter: grayscale(100%);

                
                }
            
            }
          `}
        </style>
      </div>
    );
  }
}
