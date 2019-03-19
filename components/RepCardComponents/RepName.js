import { Spring } from "react-spring";

export default props => {
  const { hovered, name } = props;
  return (
    <Spring to={{ textDecoration: hovered ? "underline" : "none" }}>
      {({ textDecoration }) => (
        <div>
          <h1 className="name bold" style={{ textDecoration: textDecoration }}>
            {name}
          </h1>
        </div>
      )}
    </Spring>
  );
};
