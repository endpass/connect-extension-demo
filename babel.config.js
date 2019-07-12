module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1%', 'last 2 versions'],
        },
        modules: false,
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
      },
    ],
  ],
};
