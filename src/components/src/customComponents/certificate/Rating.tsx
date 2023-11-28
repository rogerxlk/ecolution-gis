import React from 'react';
import { FC } from 'react';
import {Building} from "./Building";
import {RatingElement} from "./RatingElement";
interface RatingProps {
  building: Building
}
export const Rating: FC<RatingProps> = ({ building }) => {
  return (
    <div style={{paddingTop: 20, paddingLeft: 20}}><RatingElement rating={building.ratingDirekteEmission} /></div>
  );
};
