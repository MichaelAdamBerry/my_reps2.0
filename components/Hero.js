import BgImage from "./BgImage";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="container">
        <BgImage
          imgSrc={"../static/washington-skyline.jpg"}
          dark={false}
          opacity={0.95}
        />
        <div className="banner-container bold">
          <h1>My Reps</h1>
          <h3>find and connect with your elected officials</h3>
          <p>by Michael Adam Berry</p>
        </div>

        <style jsx>
          {`
                    .conatainer {
                        width: 100vw: 
                        margin: 0;
                    }

                    .img {
                      width: 100%;
                      height: 100%;
                      min-width: 100vw;
                      min-height: 100vh;
                      position: relative;  
                     
                    }

                    .img::before {
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      display: block;
                      width: 100%; 
                      height: 100%;
                      background-image: url("../static/washington-skyline.jpg");
                      background-size: cover;   
                      filter: brightness(90%);
                      z-index: -2;
                      content: "";
                      background-attachment: fixed;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-size: cover;
                  }
        
                    .img::after {
                      position: absolute;
                      content: "";
                      top: 0px;
                      left: 0px;
                      display: block;
                      width: 100%; 
                      height: 100%;
                      filter: brightness(50%);
                    }
        
        


                    .banner-container {
                        background-color: var(--site-white);
                        width: 100%;
                        min-height: 15vh;
                        border-bottom: solid 5px var(--dark-blue); 
                        padding: 0;
                        
                    }

                    h1 , p, h3 {
                        text-align: center;

                    }

                    h3 {
                        font-size: 2em;
                        color: var(--main-blue)
                    }

                    .bold h1 {
                        font-size: 4em;
                        color: var(--dark-blue);
                        margin-top: 0;
                        padding-top: .5em;
                    }
                `}
        </style>
      </div>
    );
  }
}
