import {Card, Flex} from 'antd';
import React, {FC} from 'react';
import {Rating} from "./Rating";
import {Building} from "./Building";
import {EfficiencyValues} from "./EfficiencyValues";

interface CertificateProps {
  building: Building,
}
export const Certificate: FC<CertificateProps> = ({ building }) => {
  return (
    <Card style={{ width: 360, height: 'min-content', backgroundColor: building.certificateDefinitive ? '#018675' : '#A983C6', opacity: building.certificateDefinitive ? 1 : 0.6 }}>
      <Flex style={{paddingBottom: 20}}>
        <div style={{ color: '#FFFFFF', fontSize: 12, width: '33%' }}>
          {building.certificateDefinitive ? 'Offizielle Bewertung' : 'Provisorische Bewertung'}
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 12, width: '66%', textAlign: 'right' }}>{building.address}</div>
      </Flex>
      <Card style={{borderRadius: 0}}>
        <Rating building={building} value={EfficiencyValues.efficiencyBuildingEnvelope} />
        <Rating building={building} value={EfficiencyValues.totalEnergyEfficiency} />
        <Rating building={building} value={EfficiencyValues.directCO2Emissions} />
      </Card>
    </Card>
  );
};
