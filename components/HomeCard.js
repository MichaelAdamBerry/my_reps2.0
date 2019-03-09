import Link from "next/router";
import { withRouter } from "next/router";
function HomeCardImg(props) {
  const { src, zIndex, alt } = props;
  const styles = {
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.5)",
    opacity: 0.85,
    zIndex: zIndex
  };
  return <img style={styles} src={src} alt={alt} />;
}

HomeCardImg.defaultProps = {
  zIndex: 1
};

export default HomeCardImg;
