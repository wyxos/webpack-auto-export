Webpack Auto Export

Module to generate an entry point containing exports to all files within a directory.


- Example with Webpack

```
module.exports = {
    plugins: [
        new AutoExport({
              folder: './src/views/resources',
              writeTo: './src/router/views.js',
              nameFormatter (name) {
                return pascalCase(name.replace(/src\\views\\resources\\/, ''))
              },
              importFormatter (name) {
                return name.replace(/\\/g, '/').replace(/src\/views\/resources\//, '@/views/resources/')
              }
        })
    ]
}
```

- Example with chainWebpack

```
    config.plugin('AutoExport').use(new AutoExport({
      folder: './src/views/resources',
      writeTo: './src/router/views.js',
      nameFormatter (name) {
        return pascalCase(name.replace(/src\\views\\resources\\/, ''))
      },
      importFormatter (name) {
        return name.replace(/\\/g, '/').replace(/src\/views\/resources\//, '@/views/resources/')
      }
    }))
```
