Webpack Auto Export

Module to generate an entry point containing exports to all files within a directory.

- Install
``` npm install github:wyxos/webpack-auto-export ```

- Import
``` import AutoExport from '@wyxos/webpack-auto-export' ```

or

``` const AutoExport = require('@wyxos/webpack-auto-export') ```


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
