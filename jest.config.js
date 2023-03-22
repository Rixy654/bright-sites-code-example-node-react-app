module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/app/pages/*.{jsx}', 'src/app/components/*.{jsx}'],
  coveragePathIgnorePatterns: [
    'src/app/*.{jsx}',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
};
