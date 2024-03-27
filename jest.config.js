// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
    globals: {
      'NODE_OPTIONS': '--experimental-vm-modules'
    }
  };
  