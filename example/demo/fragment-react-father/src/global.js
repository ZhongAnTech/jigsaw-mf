import Jigsaw from "jigsaw";
import config from "../config/application.json";

export const appPool = new Jigsaw(config);
export const your_other_global_var = "your data";
