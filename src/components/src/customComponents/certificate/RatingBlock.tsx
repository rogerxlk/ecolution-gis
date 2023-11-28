import React from 'react';
import { FC } from 'react';

interface RatingBlockProps {
  letter: string,
  backgroundColor: string,
  startBlock?: boolean,
  endBlock?: boolean,
  active?: boolean,
}

export const RatingBlock: FC<RatingBlockProps> = ({ letter, backgroundColor, startBlock, endBlock, active }) => {
  let width: number = 40;
  let height: number = 40;
  const borderRadius: string = '14px';
  let borderRadiusLeftSide: string = '0px';
  let borderRadiusRightSide: string = '0px';
  let borderStyle: string = '';
  let fontSize: string = '20px';
  let fontWeight: string = 'normal';

  if(startBlock || endBlock || active){
    if(active){
      borderRadiusLeftSide = borderRadius;
      borderRadiusRightSide = borderRadius;
      width = 40;
      height = 60;
      borderStyle = '4px solid white';
      fontSize = '26px';
      fontWeight = 'bold';
    }else if(startBlock) {
      borderRadiusLeftSide = borderRadius;
    }else if(endBlock) {
      borderRadiusRightSide = borderRadius;
    }
  }

  return (
    <div style={{
      width: width,
      height: height,
      backgroundColor: backgroundColor,
      borderTopLeftRadius: borderRadiusLeftSide,
      borderBottomLeftRadius: borderRadiusLeftSide,
      borderTopRightRadius: borderRadiusRightSide,
      borderBottomRightRadius: borderRadiusRightSide,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: fontSize,
      fontWeight: fontWeight,
      border: borderStyle,
    }}>{letter}</div>
  );
};
