

const config = {
    verbose: true,
    "testEnvironment": "jsdom",
    collectCoverage: true,
    coverageReporters: [
      "html"
    ],
    setupFiles: ['<rootDir>/setupJest.js'],
      moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/src/tests/styleJestMocks.js',
      },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js']
  };
  
  module.exports = config;

  //  "testEnvironment": "jsdom",   if taking it out then spyOn(global, fetch) works, but storeForTests receives an err