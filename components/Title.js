export default ({ text, name }) => {
  return (
    <div className={`${name} bold`}>
      <h1>{text}</h1>
      <style jsx>
        {`
        h1 {
            font-size: 3em; 
            margin: 0:
            line-height: 1em;
            color: var(--site-white);
        };

        .mainTitle {
            grid-column: 2 / 3;
            grid-row: 3 / 5;
            justify-self: end;

            margin-bottom: 1rem;
        }

        .mainTitle h1 {

            -webkit-writing-mode: vertical-rl;
            -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
            -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
            text-align: right;
          }
    `}
      </style>
    </div>
  );
};
