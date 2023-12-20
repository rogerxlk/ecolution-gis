import React from 'react';
import { FC } from 'react';
import {RatingElement} from "./RatingElement";
import {EfficiencyValues} from "./EfficiencyValues";

interface RatingProps {
  building: any,
  value: EfficiencyValues,
}

export const Rating: FC<RatingProps> = ({ building, value}) => {

    const buildingValue = (() => {
        switch (value) {
            case EfficiencyValues.efficiencyBuildingEnvelope:
                return 14;
            case EfficiencyValues.totalEnergyEfficiency:
                return 15;
            case EfficiencyValues.directCO2Emissions:
                return 16;
        }
    })();

  return (
    <div style={{paddingTop: 10}}>
        <div>{value}</div>
        <RatingElement rating={building[buildingValue]} />
    </div>
  );
};
