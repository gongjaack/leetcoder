import * as dotenv from "dotenv";
dotenv.config();

const GITHUB = {
  REPO: process.env.GITHUB_REPO,
  TOKEN: process.env.GITHUB_TOKEN,
  BRANCH: process.env.GITHUB_BRANCH,
};

export default GITHUB;
