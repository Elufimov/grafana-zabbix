import _ from 'lodash';
import ts from '../timeseries';

let datapoints = [[10.7104, 1498409636085], [10.578, 1498409651011], [10.5985, 1498409666628], [10.6877, 1498409681525], [10.5495, 1498409696586], [10.5981, 1498409711009], [10.5076, 1498409726949], [11.4807, 1498409741853], [11.6165, 1498409756165], [11.8575, 1498409771018], [11.9936, 1498409786056], [10.7566, 1498409801942], [10.7484, 1498409816010], [10.6038, 1498409831018], [10.2932, 1498409846010], [10.4912, 1498409861946], [10.4151, 1498409876871], [10.2401, 1498409891710], [10.4921, 1498409906143], [10.4413, 1498409921477], [10.6318, 1498409936147], [10.5277, 1498409951915], [10.6333, 1498409966052], [10.6417, 1498409981944], [10.4505, 1498409996867], [10.5812, 1498410011770], [10.4934, 1498410026573], [10.5731, 1498410041317], [10.5, 1498410056213], [10.6505, 1498410071013], [9.4035, 1498410086387]];

let series_set = [
  [[1.0247, 1498409631773], [0.9988, 1498409646697], [0.9817, 1498409661239], [0.9569, 1498409676045], [1.0331, 1498409691922], [1.0755, 1498409706546], [1.1862, 1498409721525], [1.2984, 1498409736175], [1.2389, 1498409751817], [1.1452, 1498409766783], [1.102, 1498409781699], [0.9647, 1498409796664], [1.0063, 1498409811627], [1.0318, 1498409826887], [1.065, 1498409841645], [1.0907, 1498409856647], [1.0229, 1498409871521], [1.0654, 1498409886031], [1.0568, 1498409901544], [1.0818, 1498409916194], [1.1335, 1498409931672], [1.057, 1498409946673], [1.0243, 1498409961669], [1.0329, 1498409976637], [1.1428, 1498409991563], [1.2198, 1498410006441], [1.2192, 1498410021230], [1.2615, 1498410036027], [1.1765, 1498410051907], [1.2352, 1498410066109], [1.0557, 1498410081043]],
  [[10.7104, 1498409636085], [10.578, 1498409651011], [10.5985, 1498409666628], [10.6877, 1498409681525], [10.5495, 1498409696586], [10.5981, 1498409711009], [10.5076, 1498409726949], [11.4807, 1498409741853], [11.6165, 1498409756165], [11.8575, 1498409771018], [11.9936, 1498409786056], [10.7566, 1498409801942], [10.7484, 1498409816010], [10.6038, 1498409831018], [10.2932, 1498409846010], [10.4912, 1498409861946], [10.4151, 1498409876871], [10.2401, 1498409891710], [10.4921, 1498409906143], [10.4413, 1498409921477], [10.6318, 1498409936147], [10.5277, 1498409951915], [10.6333, 1498409966052], [10.6417, 1498409981944], [10.4505, 1498409996867], [10.5812, 1498410011770], [10.4934, 1498410026573], [10.5731, 1498410041317], [10.5, 1498410056213], [10.6505, 1498410071013], [9.4035, 1498410086387]]
];

module.exports = [
  {
    name: 'groupBy',
    tests: {
      'groupBy(AVERAGE)': () => {
        ts.groupBy(datapoints, '5m', ts.AVERAGE);
      },
      'groupBy(MAX)': () => {
        ts.groupBy(datapoints, '5m', ts.COUNT);
      }
    }
  },
  {
    name: 'sumSeries',
    tests: {
      'sumSeries()': () => {
        ts.sumSeries(series_set);
      },
      'groupBy(MAX)->sumSeries()': () => {
        let prepeared_series = _.map(series_set, datapoints => ts.groupBy(datapoints, '5m', ts.MAX));
        ts.sumSeries(prepeared_series);
      }
    }
  },
  {
    name: 'groupBy vs groupBy_perf',
    tests: {
      'groupBy()': () => {
        ts.groupBy(datapoints, '5m', ts.AVERAGE);
      },
      'groupBy_perf()': () => {
        ts.groupBy_perf(datapoints, '5m', ts.AVERAGE);
      }
    }
  }
];
