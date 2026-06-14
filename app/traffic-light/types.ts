import { lightColors } from "./constants";

export type LightColor = typeof lightColors[keyof typeof lightColors];
