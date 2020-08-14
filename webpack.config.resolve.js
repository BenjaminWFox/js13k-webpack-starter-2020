const path = require('path')

/**
 * Determine the array of extensions that should be used to resolve modules.
 */
module.exports = {
  alias: {
    Components: path.resolve(__dirname, 'src/components/'),
    Navigation: path.resolve(__dirname, 'src/navigation/'),
    Classes: path.resolve(__dirname, 'src/classes/'),
    Routes: path.resolve(__dirname, 'src/routes/'),
    Redux: path.resolve(__dirname, 'src/redux/'),
    Theme: path.resolve(__dirname, 'src/theme/'),
  },
}
