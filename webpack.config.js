const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

module.exports = {
  output: {
    publicPath: "http://localhost:4201/",
    uniqueName: "microApp",
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microApp",
      filename: "remoteEntry.js",
      exposes: {
        './Module': './src/app/app.module.ts',
      },
      shared: {
        ...deps,
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/core"] },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/common"] },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: deps["@angular/router"] },
      },
    }),
  ],
};
