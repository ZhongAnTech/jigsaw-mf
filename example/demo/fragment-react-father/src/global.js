import EasyMft from "easy-mft";
import config from "../config/application.json";

export const appPool = new EasyMft(config);
export const other_global_var = "your data";
