const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chome: '67',
        safari: '11.1'
      },
      useBuiltIns: 'usage'
    }
  ]
];

module.exports = {
  presets
};
