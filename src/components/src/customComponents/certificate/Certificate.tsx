import {Card, Flex} from 'antd';
import React, {FC} from 'react';
import {Rating} from "./Rating";
import {EfficiencyValues} from "./EfficiencyValues";

interface CertificateProps {
  data: any,
}
export const Certificate: FC<CertificateProps> = ({ data }) => {

  console.log('building', data);

  return (
    <Card style={{ width: 360, height: 'min-content', backgroundColor: data.certificateDefinitive ? '#018675' : '#A983C6', opacity: data.certificateDefinitive ? 1 : 0.6 }}>
      <Flex style={{paddingBottom: 20}}>
        <div style={{ color: '#FFFFFF', fontSize: 12, width: '33%' }}>
          {data.certificateDefinitive ? 'Offizielle Bewertung' : 'Provisorische Bewertung'}
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 12, width: '66%', textAlign: 'right' }}>{data.address}</div>
      </Flex>
      <Card style={{borderRadius: 0}}>
        <Rating building={data} value={EfficiencyValues.efficiencyBuildingEnvelope} />
        <Rating building={data} value={EfficiencyValues.totalEnergyEfficiency} />
        <Rating building={data} value={EfficiencyValues.directCO2Emissions} />
      </Card>
    </Card>
  );
};
