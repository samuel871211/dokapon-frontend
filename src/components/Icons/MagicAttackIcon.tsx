export default MagicAttackIcon;

function MagicAttackIcon(props: { width?: string }) {
  const { width } = props;
  return (
    <div
      style={{
        width: width || "24px",
        height: width || "24px",
        borderRadius: "50%",
        backgroundColor: "red",
      }}
    ></div>
  );
}
