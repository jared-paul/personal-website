const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});
  
module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    basePath: '/personal-website',
    assetPrefix: '/personal-website/',
});