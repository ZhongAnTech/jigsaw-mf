import EasyMfs from "easy-mfs";
import config from "../config/application.json";

export const appPool = new EasyMfs(config);
export const your_other_global_var = "your data";
