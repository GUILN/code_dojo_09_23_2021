module.exports = {
    roots: ['<rootDir>/tests'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        }
    },
    transform: {
        "^.+\\.ts?$": 'ts-jest'
    },
    coverageReporters: ['json', 'lcov', 'text', 'clover']
}