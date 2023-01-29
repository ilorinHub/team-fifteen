const { env } = process;

const config = {
  PORT: Number(env.PORT) || 8000,
  TOKEN_SECRET: env.TOKEN_SECRET || "secret",
  DB_URI: env.DB_URI || "",
  ENVIRONMENT: env.NODE_ENV || "development",
};

const authConfigs = {
  maxInactivity: "5 mins",
  sessionLivespan: "2 days",
};

const saltRounds = env.SALT_ROUNDS || 10;

const tokenLifespan = env.TOKEN_LIFESPAN || 1000 * 3600 * 24 * 3;

module.exports = { config, authConfigs, saltRounds, tokenLifespan };
