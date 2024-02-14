import {Card, Flex} from 'antd';
import React, {FC} from 'react';
import {Rating} from "./Rating";
import {EfficiencyValues} from "./EfficiencyValues";

interface CertificateProps {
    data: any,
}
export const Certificate: FC<CertificateProps> = ({ data }) => {

    return (
        <Card style={{ width: 360, height: 'min-content', backgroundColor: data[17] === 1 ? '#018675' : data[17] === 2 ? '#A983C6' : '#949494'}}>
            <Flex style={{paddingBottom: 20}}>
                <div style={{ color: data[17] === 1 ? '#00413a' : data[17] === 2 ? '#4e2867' : '#3f3f3f', fontSize: 12, fontWeight: "bolder", width: '33%' }}>
                    {data[17] === 1 && 'Offizielle Bewertung'}
                    {data[17] === 2 && 'Provisorische Bewertung'}
                    {data[17] === 3 && 'Keine Bewertung'}
                </div>
                <div style={{ color: '#FFFFFF', fontSize: 12, width: '66%', textAlign: 'right' }}>
                  {`${data[1]},`}<br />{`${data[2]} ${data[3]}, ${data[4]}`}
                </div>
            </Flex>
            <Card style={{borderRadius: 0}}>
              {data[17] !== 3 ? (
                <>
                  <Rating building={data} label={EfficiencyValues.efficiencyBuildingEnvelope} />
                  <Rating building={data} label={EfficiencyValues.totalEnergyEfficiency} />
                  <Rating building={data} label={EfficiencyValues.directCO2Emissions} />
                </>
              ) : (
                <p>Keine Bewertung vorhanden</p>
              )}
            </Card>
        </Card>
    );
};

