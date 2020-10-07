/*
 * Copyright 2020 Tom Bazarnik et al.
 * Licensed under the GNU General Public License v2.0 w/Classpath exception
 * See LICENSE for details.
 */
module.exports = {
  rollup(config, _options) {
    const esm = config.output.format == 'esm'
    config.preserveModules = true
    config.output = { 
        ...config.output,
        dir: 'dist/',
        format: esm ? 'es' : 'cjs',
        entryFileNames: `[name]${esm ? '.esm' : ''}.js`
    }
    delete config.output.file
    return config
  },
}