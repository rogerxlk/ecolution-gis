import React from 'react';
import { FC } from 'react';
import {Building} from "./Building";
import {RatingElement} from "./RatingElement";
import {EfficiencyValues} from "./EfficiencyValues";

interface RatingProps {
  building: Building,
  value: EfficiencyValues,
}

export const Rating: FC<RatingProps> = ({ building, value}) => {

    const buildingValue = (() => {
        switch (value) {
            case EfficiencyValues.efficiencyBuildingEnvelope:
                return building.efficiencyBuildingEnvelope;
            case EfficiencyValues.totalEnergyEfficiency:
                return building.totalEnergyEfficiency;
            case EfficiencyValues.directCO2Emissions:
                return building.directCO2Emissions;
        }
    })();

  return (
    <div style={{paddingTop: 10}}>
        <div>{value}</div>
        <RatingElement rating={buildingValue} />
    </div>
  );
};
