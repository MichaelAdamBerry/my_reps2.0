import Link from "next/router";
export default props => {
  const { src, col, row, zIndex, route } = props;
  const styles = {
    boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.5)",
    gridColumn: col,
    gridRow: row,
    opacity: 0.85,
    zIndex: zIndex
  };
  return <img src={src} style={styles} />;
};
