export interface ModelInput {
  packageName: string;
  className: string;
}

export const ATTRIBUTE_TYPES =
  ["INT",
    "LONG",
    "DOUBLE",
    "FLOAT",
    "SHORT",
    "BOOLEAN",
    "DATE",
    "STRING",
    "LOCALDATE"]

export enum Libraries {
  lombok
}
