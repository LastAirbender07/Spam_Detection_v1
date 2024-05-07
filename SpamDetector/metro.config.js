// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

module.exports = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const {
    resolver: { assetExts },
  } = defaultConfig;

  const customConfig = {
    resolver: {
      assetExts: [...assetExts, 'bin', 'tflite'],
    },
  };

  return mergeConfig(defaultConfig, customConfig);
};
