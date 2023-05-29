export default BattleSpecialityIcon;

function BattleSpecialityIcon(props: { width?: string }) {
  const { width } = props;
  return (
    <div
      style={{
        width: width || "24px",
        height: width || "24px",
        borderRadius: "50%",
        backgroundColor: "yellow",
      }}
    ></div>
  );
}
