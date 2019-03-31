export default ({ bgColor = "#0f223736" }) => {
  return (
    <div className="header bold">
      <span className="header-text">Find My Reps</span>
      <style jsx>{`
        .header {
          color: var(--site-white);
          display: flex;
          position: sticky;
          top: 0;
          z-index: 1000;
          margin: 0;
          width: 100%;
          background-color: ${bgColor};
          height: 50px;
          justify-self: stretch;
          border-bottom: solid 5px #a38c78;
        }

        .header-text {
          color: var(--site-white);
          text-align: left;
          margin-left: 3em;
          font-size: 17px;
          padding: 0.5em;
          font-size: 17px;
          display: flex;
        }

        .header span {
          z-index: 1;
          background-color: var(--red-accent);
        }

        @media (min-width: 320px) and (max-width: 480px) {
          .header-text {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};
