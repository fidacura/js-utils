module.exports = {
  projects: [
    {
      displayName: "dom",
      testEnvironment: "jsdom",
      testMatch: [
        "<rootDir>/src/canvas/__tests__/**/*.js",
        "<rootDir>/src/cookies/__tests__/**/*.js",
        "<rootDir>/src/misc/__tests__/**/*.js",
        "<rootDir>/src/objects/__tests__/**/*.js",
        "<rootDir>/src/os/__tests__/**/*.js",
        "<rootDir>/src/random/__tests__/**/*.js",
        "<rootDir>/src/regex/__tests__/**/*.js",
        "<rootDir>/src/time/__tests__/**/*.js",
        "<rootDir>/src/ui/__tests__/**/*.js",
      ],
    },
    {
      displayName: "dom",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/src/color/__tests__/**/*.js",
        "<rootDir>/src/functions/__tests__/**/*.js",
      ],
    },
  ],
};
