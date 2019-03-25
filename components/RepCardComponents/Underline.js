import { Spring, config } from "react-spring";
export default class Underline extends React.Component {
  state = { hovered: false };
  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });
  render() {
    return (
      <div
        className="container"
        onMouseOver={this.setHover}
        onMouseLeave={this.cancelHover}>
        <p>{this.props.text}</p>
        <Spring to={{ width: this.state.hovered ? "100" : "0" }}>
          {({ width }) => (
            <div>
              <svg height="20" width={width}>
                <line
                  x1="1"
                  y1="1"
                  x2={width}
                  y2="0"
                  style={{ stroke: "var(--red-accent)", strokeWidth: "7" }}
                />
              </svg>
            </div>
          )}
        </Spring>
        <style jsx>{`
          p {
            font-size: 27px;
            margin-block-end: 0;
            color: var(--site-white);
          }
          .container {
            margin-left: 2em;
          }
          @media (min-width: 320px) and (max-width: 480px) {
            p {
              font-size: 17px;
              margin-block-start: 0;
            }
            .container {
              margin-left: 3em;
              display: flex;
            }
          }
        `}</style>
      </div>
    );
  }
}
