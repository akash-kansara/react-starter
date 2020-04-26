module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/index.js',
    '!**/node_modules/**',
    '!**/dist/**'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '^.+\\.(scss|css)$': '<rootDir>/__mocks__/style.js'
  },
  setupFiles: ['raf/polyfill', '<rootDir>/env/index.js'],
  setupFilesAfterEnv: [],
  snapshotSerializers: [],
  verbose: true
};