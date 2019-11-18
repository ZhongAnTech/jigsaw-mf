import Jigsaw from "jigsaw";
import appConfig from "../config/application.json";

export const appPool = new Jigsaw(appConfig);
export const your_other_global_var = "your data";
