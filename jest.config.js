module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["<rootDir>/__tests__/**/*.test.{js,jsx,ts,tsx}"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageReporters: ["text"],
};
