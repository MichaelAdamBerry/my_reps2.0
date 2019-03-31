import ContentContainer from "../components/ContentContainer";
import Hero from "../components/Hero";
import Header from "../components/Header";
import { Spring, config } from "react-spring";
import SearchModal from "../components/SearchModal";

class Index extends React.Component {
  state = { clicked: false };
  setClicked = () => this.setState({ clicked: true });
  cancelClicked = () => this.setState({ clicked: false });
  renderModal = () =>
    this.state.clicked && <SearchModal modalClose={this.cancelClicked} />;
  render() {
    return (
      <>
        {this.renderModal()}
        <Header />
        <Spring
          from={{ opacity: "0" }}
          to={{ opacity: "1" }}
          config={config.molasses}>
          {({ opacity }) => (
            <div style={{ opacity: opacity }}>
              <Hero />
              <ContentContainer setClicked={this.setClicked} />
            </div>
          )}
        </Spring>
      </>
    );
  }
}
export default Index;
