module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy({ "src/static/docs": "docs" });
  eleventyConfig.addPassthroughCopy({ "src/static/images": "images" });


  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "layouts"
    }
  };
};
