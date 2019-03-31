export default props => {
  const brightness = props.dark ? "30%" : "100%";
  return (
    <>
      <div className="img">
        <div>{props.children}</div>
      </div>
      <style jsx>{`
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
        filter: 
        display: block;
        width: 100%; 
        height: 100%;
        background-image: url(${props.imgSrc});
        background-size: cover;   
        filter: brightness(${brightness});
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
        opacity: ${props.opacity};
        filter: brightness(50%);
        z-index: -1;
      }

      @media (min-width: 320px) and (max-width: 480px) {
        .img::before {
            background-attachment: scroll;
        }
    }
  
      `}</style>
    </>
  );
};
