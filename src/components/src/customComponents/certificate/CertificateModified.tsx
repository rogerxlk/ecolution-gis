import { Card, Flex } from 'antd';
import { FC } from 'react';
import {Rating} from "./Rating";
import {Building} from "./Building";
import React from 'react';
import {EfficiencyValues} from "./EfficiencyValues";

interface CertificateProps {
  building: Building,
}
export const CertificateModified: FC<CertificateProps> = ({ building }) => {
  return (
    <Card style={{ height: '420px', width: '400px', backgroundColor: building.certificateDefinitive ? '#018675' : '#A983C6', opacity: building.certificateDefinitive ? 1 : 0.6 }}>
      <Flex style={{paddingBottom: 20}}>
        <div style={{ color: '#FFFFFF', fontSize: 16, width: '33%' }}>
          {building.certificateDefinitive ? 'Offizielle Bewertung' : 'Provisorische Bewertung'}
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 16, width: '66%', textAlign: 'right' }}>{building.address}</div>
      </Flex>
      <Card style={{ height: '300px', width: '330px', borderRadius: 0}}>
        <Rating building={building} label={EfficiencyValues.efficiencyBuildingEnvelope} />
      </Card>
    </Card>
  );
};
