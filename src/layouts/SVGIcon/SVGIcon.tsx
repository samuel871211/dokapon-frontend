import { ReactNode } from "react";

export default SVGIcon;

/**
 * Render an aspect radio 1:1 container
 *
 * Specify `props.width` or `props.height` to make component work
 */
function SVGIcon(props: {
  children?: ReactNode;
  width?: string;
  height?: string;
}) {
  const { width, height, children } = props;
  return (
    <div
      style={{
        width,
        height,
        aspectRatio: "1 / 1",
        // 以下三行為暫時性，因為目前還沒實作各Icon
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "black",
      }}
    >
      {children}
    </div>
  );
}
