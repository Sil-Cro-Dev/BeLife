export interface ModelInput {
  packageName: string;
  className: string;
}

export enum AttributesType {
  int,
  long,
  double,
  float,
  short,
  boolean,
  Date,
  String,
  LocalDate
}

export enum Libraries {
  lombok
}
