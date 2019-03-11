export default props => {
  return (
    <div className="card">
      <div className="imgContainer" />
      <div className="img" />
      <div className="info" />
      <h1 className="name">{props.name}</h1>
      <h3 className="title">{props.distrtict}</h3>
      <style jsx>{`
        .card {
          width: 500px;
          max-height: 250px;
          box-shadow: 5px 5px 5px #2f2c2c;
          background-color: #426bab;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
        }

        .imgContainer {
          background-color: white;
          grid-column: 1/2;
          grid-row: 1 / 4;
          clip-path: polygon(0 0, 100% 0, 100% 0, 0% 100%);
          z-index: 1;
        }
        .info {
          grid-column: 2/4;
          grid-row: 1/4;
        }

        .img {
          background-color: blue;
          height: 100px;
          width: 100px;
          grid-column: 1/2;
          grid-row: 2/3;
          justify-self: center;
          z-index: 2;
        }
        .name {
          grid-column: 2/4;
          grid-row: 1/2;
          justify-self: center;
        }
        .title {
          grid-column: 2/4;
          grid-row: 2/3;
          justify-self: center;
        }
      `}</style>
    </div>
  );
};
