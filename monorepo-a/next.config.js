const { MONOREPO_B_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/monorepo-b",
        destination: `${MONOREPO_B_URL}/monorepo-b`,
      },
      {
        source: "/monorepo-b/:path*",
        destination: `${MONOREPO_B_URL}/monorepo-b/:path*`,
      },
    ];
  },
};
