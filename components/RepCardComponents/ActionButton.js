import { Spring, config } from "react-spring";

export default class ActionButton extends React.Component {
  state = { hovered: false };
  setHover = () => this.setState({ hovered: true });
  cancelHover = () => this.setState({ hovered: false });
  render() {
    const { hovered } = this.state;
    return (
      <>
        <Spring
          to={{
            shade: hovered ? "var(--main-blue)" : "var(--light-blue)",
            size: hovered ? "1.3em" : "1em"
          }}
          config={config.stiff}>
          {({ shade, size }) => (
            <div
              className="action"
              onMouseOver={this.setHover}
              onMouseLeave={this.cancelHover}
              style={{ backgroundColor: shade, fontSize: size }}>
              <a
                href="https://projects.propublica.org/graphics/users-guide-to-democracy"
                className="action bold">
                <h3>Stay Informed!</h3>
              </a>
            </div>
          )}
        </Spring>
        <style jsx>{`
          .action {
            cursor: pointer;
            color: white;
            grid-column: 3/4;
            text-align: center;
            align-self: end;
          }
        `}</style>
      </>
    );
  }
}
