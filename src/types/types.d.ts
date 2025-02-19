export type RGBColor = [number, number, number];
export type RGBAColor = [number, number, number, number];
export type HexColor = string; // this is the best typescript can do at the moment
export type Millisecond = number;

export type ValueOf<T> = T[keyof T];

export type Merge<A, B> = {[K in keyof A]: K extends keyof B ? B[K] : A[K]} & B extends infer O
  ? {[K in keyof O]: O[K]}
  : never;

export type RequireFrom<T, K extends keyof T> = Merge<Required<Pick<T, K>>, Partial<Omit<T, K>>>;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export type NestedPartial<T> = {
  [P in keyof T]?: NestedPartial<T[P]>;
};

export type RowData = {
  [key: string]: string | null;
}[];

export type ProcessorResult = {
  info?: any;
  fields: Field[];
  rows: any[][];
  cols?: any[];
  metadata?: any;
} | null;
