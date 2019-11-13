import EasyMfs from "easy-mfs";
import config from "../config/application.json";

export const other_global_var = "your data";
export const appPool = new EasyMfs(config);
