

const config = {
    verbose: true,
    "testEnvironment": "jsdom",
    collectCoverage: true,
    coverageReporters: [
      "html"
    ],
      moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/src/tests/styleJestMocks.js',
      }
  };
  
  module.exports = config;