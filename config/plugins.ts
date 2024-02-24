const crypto = require("crypto");

export default ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      jwt: {
        jwtSecret:
          env("STRAPI_JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
      },
    },
  },
  upload: {
    enabled: env("NODE_ENV") === "production",
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
