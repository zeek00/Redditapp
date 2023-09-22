module.exports = {
    "verbose": true,
    "testEnvironment": "jsdom",
    "collectCoverage": true,
    "coverageReporters": [
        "html"
    ],
    "setupFiles": ["<rootDir>/setupJest.js"],
    "moduleNameMapper": {

        "\\.css$": "identity-obj-proxy",
        "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
    },
    "setupFilesAfterEnv": ["<rootDir>/src/setupTests.js"]
}

