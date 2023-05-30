
let tempMessage = (temp, inst, src) => {
  return [{
    pgn: 130316,
    SID: 0xff,
    "Instance": inst,
    "Source": src,
    "Temperature": temp,
  }]
}

module.exports = (app, plugin) => {
  return [{
    pgn: 130316,
    title: 'Outside Temperature (130316)',
    optionKey: 'TEMPERATURE_OUTSIDE_316',
    keys: [
      "environment.outside.temperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 101, 1)
    },
  },
  {
    pgn: 130316,
    title: 'Inside Temperature (130316)',
    optionKey: 'TEMPERATURE_INSIDE_316',
    keys: [
      "environment.inside.temperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 102, 2)
    }
  },
  {
    pgn: 130316,
    title: 'Engine Room Temperature (130316)',
    optionKey: 'TEMPERATURE_ENGINEROOM_316',
    keys: [
      "environment.inside.engineRoom.temperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 103, 3)
    }
  },
  {
    pgn: 130316,
    title: 'Refrigerator Temperature (130316)',
    optionKey: 'TEMPERATURE_refridgerator_316',
    keys: [
      "environment.inside.refrigerator.temperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 7)
    }
  },
  {
    pgn: 130316,
    title: 'Freezer Temperature (130316)',
    optionKey: 'TEMPERATURE_FREEZER_316',
    keys: [
      "environment.inside.freezer.temperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 13)
    }
  },
  {
    pgn: 130316,
    title: 'Main Cabin Temperature (130316)',
    optionKey: 'TEMPERATURE_MAINCABIN_316',
    keys: [
      "environment.inside.mainCabin.temperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 4)
    }
  },
  {
    pgn: 130316,
    title: 'Heating System Temperature (130316)',
    optionKey: 'TEMPERATURE_HEATINGSYSTEM_316',
    keys: [
      "environment.inside.heating.temperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 8)
    }
  },
  {
    pgn: 130316,
    title: 'Dew Point Temperature (130316)',
    optionKey: 'TEMPERATURE_DEWPOINT_316',
    keys: [
      "environment.outside.dewPointTemperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 9)
    }
  },
  {
    pgn: 130316,
    title: 'Apparent Wind Chill Temperature (130316)',
    optionKey: 'TEMPERATURE_APPARENTWINDCHILL_316',
    keys: [
      "environment.outside.apparentWindChillTemperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 10)
    }
  },
  {
    pgn: 130316,
    title: 'Theoretical Wind Chill Temperature (130316)',
    optionKey: 'TEMPERATURE_THEORETICALWINDCHILL_316',
    keys: [
      "environment.outside.theoreticalWindChillTemperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 11)
    }
  },
  {
    pgn: 130316,
    title: 'Heat Index Temperature (130316)',
    optionKey: 'TEMPERATURE_HEATINDEX_316',
    keys: [
      "environment.outside.heatIndexTemperature"
    ],
    callback: (temperature) => {
      return tempMessage(temperature, 107, 12)
    }
  }
  ]
}
