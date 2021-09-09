module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
        library: {
            name: 'AutoExport',
            type: 'commonjs'
        },
    }
}
