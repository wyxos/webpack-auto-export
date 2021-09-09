module.exports = {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
        library: {
            type: 'commonjs'
        },
    }
}
