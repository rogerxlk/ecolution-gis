import React from "react";
import {FC, ReactNode} from "react";


interface IconButtonProps {
  icon: ReactNode;
  onClick: () => void;
  isActive: boolean;
}

export const IconButton: FC<IconButtonProps> = ({icon, onClick, isActive}) => {
  //const boxShadow = isActive ? 'inset 2px 2px 4px rgba(0, 0, 0, 0.9)' : 'none';

  return (
    <div>Hello</div>
  )
}
