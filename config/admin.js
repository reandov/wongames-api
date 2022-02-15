module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '80b3f6fecdd532247b4bb49d22c1ec42'),
  },
});
