module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {runtime: 'automatic'}],
     
    ],

    env: {
      test: {
        plugins: [
          ['explicit-exports-references', { transformAssignExpr: true }]
        ]
      },
      development: {
        plugins: [
         '@babel/plugin-transform-react-jsx-source',
        '@babel/plugin-transform-react-jsx-self',
           '@babel/plugin-transform-runtime',
        ]
      }
  }

  };