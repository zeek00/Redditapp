module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {runtime: 'automatic'}],
     
    ],
<<<<<<< Updated upstream
=======
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
        ]
      }
  }
>>>>>>> Stashed changes
  };