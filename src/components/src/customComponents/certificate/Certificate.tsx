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
    <Card style={{ width: 360, height: 'min-content', backgroundColor: data[17] ? '#018675' : '#A983C6'}}>
      <Flex style={{paddingBottom: 20}}>
        <div style={{ color: '#FFFFFF', fontSize: 12, width: '33%' }}>
          {data[17] ? 'Offizielle Bewertung' : 'Provisorische Bewertung'}
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 12, width: '66%', textAlign: 'right' }}>{`${data[1]},`}<br />{`${data[2]} ${data[3]}, ${data[4]}`}</div>
      </Flex>
      <Card style={{borderRadius: 0}}>
        <Rating building={data} value={EfficiencyValues.efficiencyBuildingEnvelope} />
        <Rating building={data} value={EfficiencyValues.totalEnergyEfficiency} />
        <Rating building={data} value={EfficiencyValues.directCO2Emissions} />
      </Card>
    </Card>
  );
};
