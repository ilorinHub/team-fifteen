const { env } = process;

const config = {
  PORT: Number(env.PORT) || 8000,
  TOKEN_SECRET: env.TOKEN_SECRET || "secret",
  DB_URI: env.DB_URI || "",
  ENVIRONMENT: env.NODE_ENV || "development",
};

module.exports = config;
