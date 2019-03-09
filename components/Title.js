export default ({ text, name }) => {
  return (
    <div className={name}>
      <h1>{text}</h1>
      <style jsx>
        {`
        h1 {
            font-size: 4em; 
            margin: 0:
            line-height: 1em;
            color: #3ac3f9;
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
