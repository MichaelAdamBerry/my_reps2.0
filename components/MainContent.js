import Layout from "./MyLayout";
import Footer from "./Footer";
import Content from "./Content";
import SearchModal from "./SearchModal";
import Attributions from "./Attributions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import BgImage from "./BgImage";
library.add(faBars);

class MainContent extends React.Component {
  state = { clicked: false };
  setClicked = () => this.setState({ clicked: true });
  cancelClicked = () => this.setState({ clicked: false });
  renderModal = () =>
    this.state.clicked && <SearchModal modalClose={this.cancelClicked} />;
  render() {
    return (
      <Layout>
        <BgImage
          dark={true}
          opacity=".7"
          imgSrc="../static/washington-animation.jpg"
        />
        <div className="index-container" onClick={this.props.setClicked}>
          <div className=" one">
            <Content />
          </div>
          <div className="three">
            <div className="img-container">
              <img src="../static/capitol-street-view.jpg" />
            </div>
            <div className="text-container">
              <div>
                <p onClick={this.renderModal}>
                  Look up and connect with your Congressperson and Senators.
                </p>
              </div>
              <Attributions />
            </div>
          </div>
        </div>
        <Footer />
        <style jsx>{`

          .img-container {
            margin-top: 3em;
            display: flex;
            justify-content: center;
          }

          img { 
            width: 75%; 
            height: 75%;
          }
          .search-btn {
            grid-column: 5;
            justify-self: start;
          }

          .mobile-toggle {
            display: none
          }

          .index-container { 
            display: grid;
            grid-row-gap: 3em; 
            width: 100%;
            cursor: pointer;
            color: var(--site-white);
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }

          .logo {
            margin: auto;
            color: rgb(47, 47, 47);
            opacity: 0.8;
            height: 40px;
            color: #b12e2e;
            transform: rotate(10deg);
          }

          .img-container {
            display: flex; 
            justify-content: space-around;
          }
      
          .text-container {
            padding: 1em;
            font-size: 27px;
            text-align: justify;
            line-height: 1.5em; 
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }

          .text-container p {
            text-decoration: underline;
            text-decoration-color: red;
            width: 75%;
            margin: auto;
          }
         
          .one, .three {
            max-width: 750px;
            width: 100%;
            justify-self: center;
          }
          
          .one {
            overflow: hidden;
            grid-column: 1 / 4;
            display: flex;
            grid-row: 1 / 6;
            z-index: 5;

          }

          .three {
            grid-column: 4/ 7;
            grid-row: 1 / 6;
            z-index: 1;
            color: var(--site-white)
            display: flex; 
            flex-direction: column;
            justify-content: center;
          }

          .search-btn button {
            height: 60px;
            width: 120px;
            background-color: #ffffff
            color: black;
            cursor: pointer;
          }

          .btn {
              display: flex; 
              justify-content: center;
              margin: 1em 0; 
    
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
              display: none;
            }

            div .one{
                margin-top: 70px;
                min-height: 100vh;
                font-size: 1.2em;
                color: var(--site-black);
            }

            .one, .three {
              margin: auto;
              margin-bottom: 20px;
              max-width: 95vw;
             
            }

           .text-container {
              padding: 1em 0 0 0;
              line-height: 1em;
            }

            .two {
              display: none;
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
    );
  }
}

export default MainContent;
