module.exports = {
  name: 'card-games',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/card-games',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
