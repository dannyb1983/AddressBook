// module.exports = {
//   moduleNameMapper: {
//     '\\.(css|less|scss)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
//     'setupFilesAfterEnv':['./test/jest/__mocks__/app.test.js'],
//   }
// };

module.exports = {
  "setupFilesAfterEnv": [
    "<rootDir>/jest.setup.js"
  ]
}