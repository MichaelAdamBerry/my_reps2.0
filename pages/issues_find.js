import Issues from "./issues";
import { getSubjectSlug, getBillsBySubject } from "../api/subjectSearch";

const RenderBills = ({ bills }) => {
  if (bills && bills.length > 0) {
    return (
      <ul>
        {bills.map(bill => (
          <li>{bill.short_title}</li>
        ))}
      </ul>
    );
  } else {
    return "no results found";
  }
};

class Issues_find extends React.Component {
  state = { message: "" };
  async componentDidMount() {
    const { num_results, data } = this.props;
    if (num_results > 0) {
      const tempData = await getBillsBySubject(data.subjects[0].url_name);
      const bills = tempData.results;
      this.setState({ bills: tempData.results });
    } else {
      this.setState({ message: "no results found" });
      console.log("no results were found");
    }
  }

  renderMessage = () => "No results were found";

  render() {
    const { bills, message } = this.state;
    return <RenderBills bills={bills} />;
  }
}

Issues_find.getInitialProps = async context => {
  const query = context.query;
  let slug = await getSubjectSlug(query.term);
  const data = slug.results[0];
  const { num_results } = data;
  return { data, num_results };
};

export default Issues_find;
