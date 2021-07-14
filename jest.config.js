module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    roots: ['<rootDir>/src', '<rootDir>/tests'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\js$': 'babel-jest',
    },
    testMatch: ['**/tests/**/?(*.)+(test).[jt]s?(x)', '**/tests/**/*spec.[jt]s?(x)', '**/__tests__/**/*.spec.js'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!lodash-es)'],
};
