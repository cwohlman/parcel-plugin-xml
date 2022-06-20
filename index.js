module.exports = bundler => {
  bundler.addAssetType('.txt', require.resolve('./TxtAsset'));
  bundler.addAssetType('.xml', require.resolve('./TxtAsset'));
};
