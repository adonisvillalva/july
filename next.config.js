/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  //output: "export",
  experimental: {
    appDir: true,
  },
  sassOptions:{
    incluidePath: [path.join(__dirname, 'styles')],
  },
  images:{
    //domains: ["black-island-058221d0f.3.azurestaticapps.net"],
  }
}

module.exports = nextConfig
