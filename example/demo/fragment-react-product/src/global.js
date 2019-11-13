import EasyMfs from "easy-mfs";
import appConfig from "../config/application.json";

export const appPool = new EasyMfs(appConfig);
export const your_other_global_var = "your data";
