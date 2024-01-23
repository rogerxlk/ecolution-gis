import React from 'react';
import { FC } from 'react';
import {RatingElement} from "./RatingElement";
import {EfficiencyValues} from "./EfficiencyValues";

interface RatingProps {
  building: any,
  label: EfficiencyValues,
}

export const Rating: FC<RatingProps> = ({ building, label}) => {

    const buildingValue = (() => {
        switch (label) {
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
        <div>{label}</div>
        <RatingElement rating={building[buildingValue]} />
    </div>
  );
};

