const BleConstants = {
  timeData: {
    serviceUUID: 'a2104004-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2104005-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 8,
  },
  modelData: {
    serviceUUID: '180a',
    characteristicUUID: '2a24',
  },
  sessionStartTimestamp: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101006-7d7d-11eb-9439-0242ac130002',
  },
  masterSlave: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101007-7d7d-11eb-9439-0242ac130002',
  },
  debug: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101008-7d7d-11eb-9439-0242ac130002',
  },
  rebootInfo: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101101-7d7d-11eb-9439-0242ac130002',
  },
  resetReas: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101102-7d7d-11eb-9439-0242ac130002',
  },
  secondsSinceLastReboot: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101103-7d7d-11eb-9439-0242ac130002',
  },
  firmwareVersionData: {
    serviceUUID: '180a',
    characteristicUUID: '2a26',
  },
  batteryLevel: {
    serviceUUID: '180f',
    characteristicUUID: '2a19',
    maxByteSize: 1,
  },
  uptime: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101103-7d7d-11eb-9439-0242ac130002',
  },
  sensorState: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101002-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 1,
  },
  startStop: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101004-7d7d-11eb-9439-0242ac130002',
  },
  dataSize: {
    serviceUUID: 'a2103000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2103003-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 4,
  },
  sessionCount: {
    serviceUUID: 'a2103000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2103005-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 4,
  },
  recordingData: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2101004-7d7d-11eb-9439-0242ac130002',
    notificationUUID: 'a2101002-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 1,
  },
  dataContent: {
    serviceUUID: 'a2103000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2103010-7d7d-11eb-9439-0242ac130002',
  },
  dataControl: {
    serviceUUID: 'a2103000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2103002-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 1,
  },
  dataSource: {
    serviceUUID: 'a2103000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2103001-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 1,
  },
  totalSizeRAW: 12582912,
  totalSizeMetric: 4194304,
  playerHeight: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2102100-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 2,
  },
  securityData: {
    serviceUUID: '180a',
    characteristicUUID: '2a26',
  },
  sensorShoe: {
    serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
    characteristicUUID: 'a2102101-7d7d-11eb-9439-0242ac130002',
    maxByteSize: 2,
  },

  KPI: 'https://dev.api.433pro.by433.com/api/v1/app/players-sensors-sessions/create',
  S3_API: 'https://dev.api.jogo.ai/jogo/api/upload-csv',
  activities: [
    '517 - Dribble 10m + pass + run 10m in straight line',
    '518 - Dribble across penalty area + turn 180 + dribble and shoot the ball',
    '519 - Run without ball + change direction(s) + receive the ball + shot',
    '520 - Rondo 4 vs 1 in 5x5 meter square',
    '106 - Shots from goal area line',
  ],
  rawData: {
    modeName: 'RAW',
    start: {
      serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
      characteristicUUID: 'a2101004-7d7d-11eb-9439-0242ac130002',
      notificationUUID: 'a2101002-7d7d-11eb-9439-0242ac130002',
      maxByteSize: 1,
      data: 0x01,
    },
    stop: {
      serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
      characteristicUUID: 'a2101004-7d7d-11eb-9439-0242ac130002',
      notificationUUID: 'a2101002-7d7d-11eb-9439-0242ac130002',
      maxByteSize: 1,
      data: 0x00,
    },
  },
  metricData: {
    modeName: 'Metric',
    start: {
      serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
      characteristicUUID: 'a2101004-7d7d-11eb-9439-0242ac130002',
      notificationUUID: 'a2101002-7d7d-11eb-9439-0242ac130002',
      maxByteSize: 1,
      data: 0x02,
    },
    stop: {
      serviceUUID: 'a2101000-7d7d-11eb-9439-0242ac130002',
      characteristicUUID: 'a2101004-7d7d-11eb-9439-0242ac130002',
      notificationUUID: 'a2101002-7d7d-11eb-9439-0242ac130002',
      maxByteSize: 1,
      data: 0x00,
    },
  },
};

export default BleConstants;
