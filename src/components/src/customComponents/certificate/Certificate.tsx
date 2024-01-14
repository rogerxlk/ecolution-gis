import {Card, Flex} from 'antd';
import React, {FC} from 'react';
import {Rating} from "./Rating";
import {EfficiencyValues} from "./EfficiencyValues";
import {getTooltipDisplayDeltaValue, getTooltipDisplayValue} from "@kepler.gl/reducers";

/*interface CertificateProps {
  data: any,
}
export const Certificate: FC<CertificateProps> = ({ data }) => {*/

interface CertificateProps {
  fieldsToShow: any,
  fields: any,
  data: any,
  primaryData: any,
  compareType: any,
}
export const Certificate: FC<CertificateProps> = ({fieldsToShow, fields, data, primaryData, compareType}) => {


  console.log('fieldsToShow', fieldsToShow);
  console.log('fields', fields);
  console.log('data', data);
  console.log('primaryData', primaryData);
  console.log('compareType', compareType);

    {fieldsToShow.map(item => (
      const fieldIdx = fields.findIndex(f => f.name === item.name);
      if (fieldIdx < 0) {
          return null;
      }
      const field = fields[fieldIdx];
      const value = data.valueAt(fieldIdx);
      const displayValue = getTooltipDisplayValue({item, field, value});

      const displayDeltaValue = primaryData
          ? getTooltipDisplayDeltaValue({
              field,
              data,
              fieldIdx,
              primaryData,
              compareType
          })
          : null;
    )}

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
