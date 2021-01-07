const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});
  
module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    basePath: '/wallisconsultancy',
    assetPrefix: '/personal-website/',
});