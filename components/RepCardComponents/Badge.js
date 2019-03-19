export default ({ title, row }) => {
  return (
    <>
      <div className="badge bold">
        <h3>{title}</h3>
      </div>
      <style>{`
            .badge{
                background-color: #2f2f2f; 
                color: white;
                grid-column: 1; 
                grid-row: ${row === "3" ? "3" : "2"};
                justify-self: end;
                align-self: end;
                width: 150px;
                min-height: 30px; 
                max-height: 30px;
                z-index: 30;
                text-align: center;
            }
            .badge h3 {
                font-size : .7em;
            }
            @media (min-width: 320px) and (max-width: 600px) {
               .badge {
                  grid-row: 2;
               }   
            }

        `}</style>
    </>
  );
};
