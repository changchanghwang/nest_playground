module.exports = {
  verbose: true,
  testRegex: ['.*\\.test\\.ts$', '.*\\.spec\\.ts$'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleDirectories: ['node_modules'],
  preset: 'ts-jest',
  testMatch: null,
  testEnvironment: 'node',
};