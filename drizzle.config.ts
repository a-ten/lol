import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

// export default defineConfig({
  // schema: "./server/schema.ts",
  // out: "./server/migrations",
  // driver: "pg",
  // dbCredentials: {
    // url: process.env.POSTGRES_URL!,
    // connectionString: process.env.POSTGRES_URL!,
  // },
// });
