export default class Badge extends React.Component {
  state = { row: this.props };
  render() {
    const { title } = this.props;
    const { row } = this.state;
    const pos = row === "3" ? "3" : "2";
    return (
      <>
        <div className="badge bold">
          <h3>{title}</h3>
        </div>
        <style>{`
            .badge{
                background-color: var(--dark-blue); 
                color: var(--site-white);
                grid-column: 1; 
                grid-row: 3;
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
                margin-bottom: 0;
            }
            @media (min-width: 320px) and (max-width: 600px) {
               .badge {
                  grid-row: 2;
               }   
            }

        `}</style>
      </>
    );
  }
}
