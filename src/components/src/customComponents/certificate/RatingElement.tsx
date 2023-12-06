import { FC } from 'react';
import {RatingBlock} from "./RatingBlock";
import {Flex} from "antd";
import React from 'react';
interface RatingElementProps {
  rating: number
}
export const RatingElement: FC<RatingElementProps> = ({ rating }) => {

  const ratingData = [
    { letter: 'A', backgroundColor: '#009640', startBlock: true, active: false, endBlock: false },
    { letter: 'B', backgroundColor: '#52AE32', startBlock: false, active: false, endBlock: false },
    { letter: 'C', backgroundColor: '#C8D300', startBlock: false, active: false, endBlock: false },
    { letter: 'D', backgroundColor: '#FFED00', startBlock: false, active: false, endBlock: false },
    { letter: 'E', backgroundColor: '#FBBA00', startBlock: false, active: false, endBlock: false },
    { letter: 'F', backgroundColor: '#EC6608', startBlock: false, active: false, endBlock: false },
    { letter: 'G', backgroundColor: '#E30613', startBlock: false, active: false, endBlock: true },
  ];

  ratingData[rating].active = true;

  return (
    <Flex style={{ alignItems: 'center' }}>
      {ratingData.map((block, index) => (
        <RatingBlock
          key={index}
          letter={block.letter}
          backgroundColor={block.backgroundColor}
          startBlock={block.startBlock}
          active={block.active}
          endBlock={block.endBlock}
        />
      ))}
    </Flex>
  );
};
