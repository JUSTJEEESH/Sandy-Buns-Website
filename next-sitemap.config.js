/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://sandybuns.netlify.app',
  generateRobotsTxt: true,
  outDir: './public',
};
