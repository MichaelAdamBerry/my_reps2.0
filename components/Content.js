//component holds the main text the user will see

export default () => {
  return (
    <div className="info">
      <h3 className="headline ">
        The Age of Information That Wasn't : Study Shows Electorate Increasingly
        Distanced From Their Representatives
      </h3>
      <p className="lead">
        <a href="https://www.haveninsights.com/just-37-percent-name-representative/">
          A study conducted by Haven Insights
        </a>{" "}
        shows a shocking number of US citizens don't know who exactly is writing
        and voting on all those bills Washington DC.
      </p>

      <p>
        While just over half (56%) of Americans know their Representative’s
        party affiliation, 37% know their Representative’s name and even 23% of
        Americans who voted for a Representative last November fail to name
        their current Representative.
      </p>

      <style jsx>
        {`
          li {
            limargin-bottom: 1em;
            font-size: 1.2em;
            text-align: justify;
          }

          .headline {
            font-weight: bold;
          }

          .kicker {
            text-decoration: underline;
            text-align: left;
          }

          .info .kicker {
            font-size: 1em;
            margin-top: 0.5em;
            font-weight: bold;
          }

          .info {
            width: 100%;
            height: 100%;
            margin-left: 1.5em;

            color: var(--site-white);
            overflow-y: scroll;
            padding: 1em;
          }

          .info h3,
          .info h5 {
            font-weight: bold;
            font-size: 2em;

            color: var(--site-white);
          }

          .info p {
            line-height: 1.7em;
            font-size: larger;
          }

          .byLine {
            font-style: italic;
            text-align: right;
            margin: 0.5em 0;
            border-bottom: solid 1px;
          }

          a {
            color: var(--site-white);
            text-decoration: underline;
            text-decoration-color: red;
          }

          .lead p {
            font-size: 1.2em;
            font-style: normal;
          }

          @media (min-width: 320px) and (max-width: 480px) {
            .info {
              margin-left: 0;
              font-size: 1em;
            }
            .info h3 {
              font-size: 1.5em;
            }
            .info p {
              font-size: 1em;
            }
          }
        `}
      </style>
    </div>
  );
};
