module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   plugins: [
            //     '@babel/plugin-transform-arrow-functions',
            //     '@babel/plugin-transform-block-scoping',
            //   ],
            // },
          },
        ],
      },
    ],
  },
}
