export default () => {
  return (
    <div className="container">
      <div className="attributions">
        <div>
          <p>Powered by the Propublica Congress API & the Google Civics API</p>
        </div>
        <div>
          <p>Made with React and Next.js</p>
        </div>
        <div className="img-container">
          <img
            src="../static/propublica-data-store.png"
            alt="propbulica data store logo"
            style={{ height: "20px", width: "auto" }}
          />
          <img
            src="../static/google-civics-api.png"
            alt="google api logo"
            style={{ height: "20px", width: "auto" }}
          />
          <img
            src="../static/react.png"
            alt="react logo"
            style={{ height: "20px", width: "auto" }}
          />
          <img
            src="../static/nextjs.png"
            alt="next.js api logo"
            style={{ height: "20px", width: "auto" }}
          />
        </div>
      </div>
      <style jsx>{`
        .attributions {
          margin-top: 1em;
          min-height: 100px;
          border-top: solid 1px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          font-size: 13px;
          font-style: italic;
          color: var(--site-white);
        }
        .attributions p {
          margin-block-start: 3px;
          margin-block-end: 3px;
          line-height: 1em;
        }
        .img-container {
          display: flex;
          justify-content: space-between;
        }
        .container {
          width: 75%;
          margin: auto;
        }
        .icon-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};
