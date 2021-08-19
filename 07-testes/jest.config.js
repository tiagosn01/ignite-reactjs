module.exports = {
  testPathIgnorePatterns: ["/node_modules", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  teansform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: 'jsdom'
}