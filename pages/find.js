import { fetchData } from "../api/districtSearch";
import {
  getCurrentHouseMember,
  getCurrentSenateMembers,
  getSpecificSenateMembers
} from "../api/repSearch";
import Rep from "../components/Rep";

const Find = props => {
  const { data, repArr } = props;
  return (
    <div>
      <p>{data.name}</p>
      {repArr.map(repObj => {
        if (repObj.first_name && repObj.last_name) {
          return <p>{`${repObj.first_name} ${repObj.last_name}`}</p>;
        }
      })}
    </div>
  );
};

Find.getInitialProps = async context => {
  const address = context.query.address;

  console.log("get initial props called with ");
  const testQuery = "424 rodney street, brooklyn ny, 11222";
  const data = await fetchData(address);
  const rep = await getCurrentHouseMember(data.state, data.district);
  const senURIs = await getCurrentSenateMembers(data.state);
  const senA = await getSpecificSenateMembers(senURIs[0]);
  const senB = await getSpecificSenateMembers(senURIs[1]);
  const repArr = [rep, senA.results[0], senB.results[0]];

  return { data, repArr, address };
};

export default Find;
