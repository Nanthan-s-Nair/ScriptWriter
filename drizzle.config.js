/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/Schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Script_owner:ipCma7xS6sfX@ep-white-king-a5h8zl1k.us-east-2.aws.neon.tech/Script?sslmode=require',
    }
  };