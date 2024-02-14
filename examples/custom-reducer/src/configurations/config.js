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

export default {
  version: 'v1',
  config: {
    visState: {
      filters: [],
      layers: [
        {
          id: '1s8r5md',
          type: 'point',
          config: {
            dataId: 'tree_data',
            label: 'location',
            color: [18, 147, 154],
            columns: {
              lat: 'Location_latitude',
              lng: 'Location_longitude',
              altitude: null
            },
            isVisible: true,
            visConfig: {
              radius: 10,
              fixedRadius: false,
              opacity: 0.8,
              outline: false,
              thickness: 2,
              colorRange: {
                name: 'Ice And Fire',
                type: 'all',
                category: 'Uber',
                colors: ['#4ea119', '#a45905', '#8c02bb', '#E8FEB5', '#49E3CE', '#0198BD'],
                reversed: true
              },
              radiusRange: [33.6, 96.2],
              'hi-precision': false
            }
          },
          visualChannels: {
            colorField: {
              name: 'Species',
              type: 'string'
            },
            colorScale: 'ordinal',
            sizeField: {
              name: 'Age',
              type: 'integer'
            },
            sizeScale: 'sqrt'
          }
        },
      ],
      interactionConfig: {
        tooltip: {
          fieldsToShow: {
            tree_data: ['TreeID', 'Species', 'Address', 'Has_Species', 'SiteInfo']
          },
          enabled: true
        },
        brush: {
          size: 0.5,
          enabled: false
        },
        geocoder: {
          enabled: false
        }
      },
      layerBlending: 'normal',
      splitMaps: []
    },
    mapState: {
      bearing: 0,
      dragRotate: false,
      latitude: 46.8,
      longitude: 7.8,
      pitch: 0,
      zoom: 7.4,
      isSplit: false
    },
    mapStyle: {
      styleType: 'light',
      topLayerGroups: {
        label: true
      },
      visibleLayerGroups: {
        label: true,
        road: true,
        border: true,
        building: true,
        water: true,
        land: true
      }
    }
  }
};
