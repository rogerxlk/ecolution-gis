import { Card, Flex } from 'antd';
import { FC } from 'react';
import { CertificateTitle } from './CertificateTitle';
import {Rating} from "./Rating";
import {Building} from "./Building";
import React from 'react';
interface CertificateProps {
  building: Building,
}
export const Certificate: FC<CertificateProps> = ({ building }) => {
  return (
    <div style={{paddingTop: 20, paddingLeft: 20}}>
      <Card
        title={<CertificateTitle />}
        style={{ width: '400px', height: '500px' }}
        bodyStyle={{ padding: 10 }}
      >
        <Card style={{ height: '420px', backgroundColor: building.certificateDefinitive ? '#018675' : '#A983C6', opacity: building.certificateDefinitive ? 1 : 0.6 }}>
          <Flex style={{paddingBottom: 20}}>
            <div style={{ color: '#FFFFFF', fontSize: 16, width: '33%' }}>
              {building.certificateDefinitive ? 'Offizielle Bewertung' : 'Provisorische Bewertung'}
            </div>
            <div style={{ color: '#FFFFFF', fontSize: 16, width: '66%', textAlign: 'right' }}>{building.address}</div>
          </Flex>
          <Card style={{ height: '300px', width: '330px', borderRadius: 0}}>
            <Rating building={building} />
          </Card>
        </Card>
      </Card>
    </div>
  );
};
