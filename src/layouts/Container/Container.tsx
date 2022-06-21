// Standard library imports.

// Related third party imports.
import { ReactNode } from "react";
import classNames from "classnames";

// Local application/library specific imports.
import { AspectRatioTypes } from "global";
import styles from "./Container.module.css";
import indexStyles from "index.module.css";

// Stateless vars declare.
const aspectRatioStyles = {
  "16:9": indexStyles.wideAspectRatio,
  "4:3": indexStyles.traditionalAspectRatio,
  stretch: indexStyles.stretchAspectRatio,
};

export default Container;

function Container(props: {
  children: ReactNode | ReactNode[];
  aspectRatio: AspectRatioTypes;
  className?: string;
}): JSX.Element {
  const { children, aspectRatio, className } = props;
  return (
    <div
      className={classNames(
        styles.container,
        className,
        aspectRatioStyles[aspectRatio]
      )}
    >
      <>{children}</>
    </div>
  );
}
