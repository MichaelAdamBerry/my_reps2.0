import { getNewMembers } from "../api/newMembers";
import Rep from "../components/Rep";

const NewMembers = props => {
  const { data } = props;
  return (
    <div>
      {data.map(repObj => {
        if (repObj.first_name && repObj.last_name) {
          return <p>{`${repObj.first_name} ${repObj.last_name}`}</p>;
        }
      })}
    </div>
  );
};

NewMembers.getInitialProps = async () => {
  const data = await getNewMembers();
  return { data };
};

export default NewMembers;
