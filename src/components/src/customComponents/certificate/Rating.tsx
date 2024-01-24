import React from 'react';
import { FC } from 'react';
import {RatingElement} from "./RatingElement";
import {EfficiencyValues} from "./EfficiencyValues";

interface RatingProps {
  building: any,
  label: EfficiencyValues,
}

export const Rating: FC<RatingProps> = ({ building, label}) => {

  const buildingValue = {
    [EfficiencyValues.efficiencyBuildingEnvelope]: 14,
    [EfficiencyValues.totalEnergyEfficiency]: 15,
    [EfficiencyValues.directCO2Emissions]: 16,
  }[label];


  return (
    <div style={{paddingTop: 10}}>
        <div>{label}</div>
        <RatingElement rating={building[buildingValue]} />
    </div>
  );
};

