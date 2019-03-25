import { fetchData } from "../api/districtSearch";
import District from "../components/District";
import ErrorBoundary from "../components/ErrorBoundary";

const RenderError = () => <h1>That Address Doesn't Seem to Exist</h1>;

const RenderDistrict = ({ data }) => (
  <ErrorBoundary>
    <District data={data} />
  </ErrorBoundary>
);

class Find extends React.Component {
  render() {
    const { data } = this.props;
    return <>{!data ? <RenderError /> : <RenderDistrict data={data} />}</>;
  }
}

Find.getInitialProps = async context => {
  const address = context.query.address;
  console.log("get initial props called with ", address);
  const data = await fetchData(address);
  return { data };
};

export default Find;
