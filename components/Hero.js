export default class Hero extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="img-container">
          <img
            src="../static/washington-skyline.jpg"
            alt="animation of Washington DC Skyline"
          />
        </div>
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

                    .img-container {
                        width: 100vw;
                        max-height: 85vh;
                        overflow: hidden;
                    }
                    img {
                        width: 100%;
                        
                    }

                    .banner-container {
                        background-color: var(--site-white);
                        width: 100%;
                        min-height: 15vh;
                        border-bottom: solid 5px var(--dark-blue); 
                        padding: 2em 0;
                        
                    }

                    h1 , p, h3 {
                        text-align: center;
            
                    }

                    h3 {
                        font-size: 2em;
                        color: var(--light-blue)
                    }

                    .bold h1 {
                        font-size: 4em;
                        color: var(--main-blue);
                        font-family: "Teko;
                    }
                `}
        </style>
      </div>
    );
  }
}
