#!/usr/bin/env node

'use strict';
/* eslint-disable no-useless-computed-key */

crashEntry();
process.exit(0);

function crashEntry() {
  weirdBootstrap();
  const entities = getEntities();

  for (let i = 0; i < 10; i += 1) {
    console.error('calling csvRows iteration:', i);
    csvRows(entities);
  }
}

function csvRows(entities) {
  for (let i = 0; i < 10; i += 1) {
    entityIntervalFn(entities[0], i);
    entityIntervalFn(entities[1], i);
  }
}

function entityIntervalFn(entity, i) {
  const iData = entity.intervalData[i];
  const val1 = iData ? iData.key1 : null;

  const result = {
    ['cruft']: 'foo',
    val1,
  };

  console.log({ i, iData });

  result.key3 = 1;
}

function getEntities() {
  return [{
    intervalData: [
      null,
      { key1: 1,
        key2: undefined },
    ]
  }, {
    intervalData: [
      null,
      { key1: 1,
        key2: undefined },
    ]
  }];
}

function weirdBootstrap() {
  return {
    key1: 0.7,
    key2: undefined,
  };
}
