import React from "react";
import {FC, ReactNode} from "react";
import {Button} from "antd";


interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  isActive: boolean;
}

export const IconButton: FC<IconButtonProps> = ({icon, onClick, isActive}) => {
  const boxShadow = isActive ? 'inset 2px 2px 4px rgba(0, 0, 0, 0.9)' : 'none';

  return (
    <Button
      type={"primary"}
      shape={"round"}
      className={isActive ? 'active' : ''}
      icon={icon}
      style={{
        width: 60,
        height: 60,
        backgroundColor: isActive ? '#01544C' : '#018675',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: boxShadow
      }}
      onClick={onClick}
    />
  )
}
