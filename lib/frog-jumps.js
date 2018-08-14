module.exports = (start, end, ln) => {
  if (start > end || ln <= 0) {
    return 0;
  } else {
    return Math.ceil((end - start) / ln);
  }
};
