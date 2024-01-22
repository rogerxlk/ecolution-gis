// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React from 'react';
import styled from 'styled-components';
import {CenterFlexbox} from '../common/styled-components';
import PropTypes from 'prop-types';
import {Certificate} from "../customComponents/certificate/Certificate";

export const StyledLayerName = styled(CenterFlexbox)`
  color: ${props => props.theme.textColorHl};
  font-size: 12px;
  letter-spacing: 0.43px;
  text-transform: capitalize;

  svg {
    margin-right: 4px;
  }
`;

/*const StyledTable = styled.table`
  & .row__delta-value {
    text-align: right;
    margin-left: 6px;

    &.positive {
      color: ${props => props.theme.notificationColors.success};
    }

    &.negative {
      color: ${props => props.theme.negativeBtnActBgd};
    }
  }
  & .row__value,
  & .row__name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: no-wrap;
  }
`;

const StyledDivider = styled.div`
  // offset divider to reach popover edge
  margin-left: -14px;
  margin-right: -14px;
  border-bottom: 1px solid ${props => props.theme.panelBorderColor};
`;

interface RowProps {
  name: string;
  value: string;
  deltaValue?: string | null;
  url?: string;
}*/

/*const Row: React.FC<RowProps> = ({name, value, deltaValue, url}) => {
  // Set 'url' to 'value' if it looks like a url
  if (!url && value && typeof value === 'string' && value.match(/^http/)) {
    url = value;
  }

  const asImg = /<img>/.test(name);
  return (
    <tr className="layer-hover-info__row" key={name}>
      <td className="row__name">{asImg ? name.replace('<img>', '') : name}</td>
      <td className="row__value">
        {asImg ? (
          <img src={value} />
        ) : url ? (
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {value}
          </a>
        ) : (
          <>
            <span>{value}</span>
            {notNullorUndefined(deltaValue) ? (
              <span
                className={`row__delta-value ${
                  deltaValue.toString().charAt(0) === '+' ? 'positive' : 'negative'
                }`}
              >
                {deltaValue}
              </span>
            ) : null}
          </>
        )}
      </td>
    </tr>
  );
};*/

/*const EntryInfo = ({fieldsToShow, fields, data, primaryData, compareType}) => {
  const rowData = fields.map(item => {
    const fieldIdx = fields.findIndex(f => f.name === item.name);
    if (fieldIdx < 0) {
      return null;
    }
    const field = fields[fieldIdx];
    const value = data.valueAt(fieldIdx);

    return value;
  });

  console.log("rowData", rowData);

  return <Certificate data={rowData}></Certificate>;

}*/

/*const EntryInfoRow = ({item, fields, data, primaryData, compareType}) => {
  const fieldIdx = fields.findIndex(f => f.name === item.name);
  if (fieldIdx < 0) {
    return null;
  }
  const field = fields[fieldIdx];
  const value = data.valueAt(fieldIdx);
  console.log("value", value);
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

  return (
    <Row
      name={field.displayName || field.name}
      value={displayValue}
      deltaValue={displayDeltaValue}
    />
  );
};*/

// TODO: supporting comparative value for aggregated cells as well
/*const CellInfo = ({
  fieldsToShow,
  data,
  layer
}: {
  data: AggregationLayerHoverData;
  fieldsToShow: TooltipField[];
  layer: Layer;
}) => {
  const {colorField, sizeField} = layer.config as any;

  const colorValue = useMemo(() => {
    if (colorField && layer.visualChannels.color) {
      const item = fieldsToShow.find(field => field.name === colorField.name);
      return getTooltipDisplayValue({item, field: colorField, value: data.colorValue});
    }
    return null;
  }, [fieldsToShow, colorField, layer, data.colorValue]);

  const elevationValue = useMemo(() => {
    if (sizeField && layer.visualChannels.size) {
      const item = fieldsToShow.find(field => field.name === sizeField.name);
      return getTooltipDisplayValue({item, field: sizeField, value: data.elevationValue});
    }
    return null;
  }, [fieldsToShow, sizeField, layer, data.elevationValue]);

  const colorMeasure = layer.getVisualChannelDescription('color').measure;
  const sizeMeasure = layer.getVisualChannelDescription('size').measure;
  return (
    <tbody>
      <Row name={'total points'} key="count" value={String(data.points && data.points.length)} />
      {colorField && layer.visualChannels.color && colorMeasure ? (
        <Row name={colorMeasure} key="color" value={colorValue || 'N/A'} />
      ) : null}
      {sizeField && layer.visualChannels.size && sizeMeasure ? (
        <Row name={sizeMeasure} key="size" value={elevationValue || 'N/A'} />
      ) : null}
    </tbody>
  );
};*/

const LayerHoverInfoFactory = () => {
  const LayerHoverInfo = props => {
    const {data, layer, fields} = props;
    if (!data || !layer) {
      return null;
    }

    const rowData = fields.map(item => {
      const fieldIdx = fields.findIndex(f => f.name === item.name);
      if (fieldIdx < 0) {
        return null;
      }
      return data.valueAt(fieldIdx);
    });

    return <Certificate data={rowData}></Certificate>;
  };

  LayerHoverInfo.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.any),
    fieldsToShow: PropTypes.arrayOf(PropTypes.any),
    layer: PropTypes.object,
    data: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.object])
  };
  return LayerHoverInfo;
};

export default LayerHoverInfoFactory;
