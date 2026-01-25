import { HTMLAttributes, ReactElement } from "react";
import clsx from "clsx";

function InfoBox(props: HTMLAttributes<HTMLDivElement>): ReactElement {
  const { children, className } = props;

  return <div className={clsx("info-box", className)}>{children}</div>;
}

export default InfoBox;
