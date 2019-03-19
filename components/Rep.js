import RepCard from "./RepCard";
import { firstElected } from "../api/repSearch";
export default class Rep extends React.Component {
  state = { repObj: this.props.repObj, showText: false };
  toggle = () =>
    this.setState(prevState => ({
      showText: !prevState.showText
    }));
  render() {
    const { repObj, showText } = this.state;
    const order = this.props.order;
    const name = repObj.first_name
      ? `${repObj.first_name} ${repObj.last_name}`
      : "";
    const twitter_id = repObj.twitter_account ? repObj.twitter_account : "";
    const id = repObj.id ? repObj.id : "";
    const { party } = repObj.roles ? repObj.roles[0] : "";
    const { title } = repObj.roles ? repObj.roles[0] : "";
    const inOfficeSince = repObj.roles ? firstElected(repObj) : "";
    const { youtube_account, facebook_account } = repObj;
    const url = repObj.url ? repObj.url : "";

    return (
      <a href={url}>
        <RepCard
          toggleText={this.toggle}
          name={name}
          title={title}
          party={party}
          twitter_id={twitter_id}
          youtube_account={youtube_account}
          facebook_account={facebook_account}
          id={id}
          order={order}
          inOfficeSince={inOfficeSince}
        />
        <style jsx>{``}</style>
      </a>
    );
  }
}
