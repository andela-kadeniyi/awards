module.exports = {
  entry: './app/components/Main.js',
  output: {
    filename:'./public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {presets:['es2015', 'react']}},
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
};
