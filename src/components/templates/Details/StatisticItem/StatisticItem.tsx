import React from "react";
import * as Style from "./index.styled";

type StatisticItemProps = {
  icon: JSX.Element;
  text: number | string | undefined;
};

const StatisticItem: React.FC<StatisticItemProps> = (props) => {
  const displayText = props.text === "none" || props.text === "" ? 0 : props.text;

  return (
    <Style.StatisticItem>
      <Style.Icon>{props.icon}</Style.Icon>
      <Style.Text>{displayText}</Style.Text>
    </Style.StatisticItem>
  );
};

export default StatisticItem;
