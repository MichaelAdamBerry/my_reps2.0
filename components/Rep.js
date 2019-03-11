import RepCard from "./RepCard";

export default class Rep extends React.Component {
  state = { repObj: this.props.repObj };
  render() {
    const { repObj } = this.state;
    const name = repObj.first_name
      ? `${repObj.first_name} ${repObj.last_name}`
      : "";
    const district = "placeholder district";
    return (
      <div className="container">
        <RepCard name={name} district={district} />
        <style jsx>
          {`
            .container {
              height: 500px;
              width: 100vw;
              display: flex;
              justify-content: center;
              background-color: #3c65b1;
            }
          `}
        </style>
      </div>
    );
  }
}
