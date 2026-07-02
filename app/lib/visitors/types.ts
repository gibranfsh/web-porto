export type VisitorStats = {
  total: number;
  unique: number;
  countryCount: number;
  byCountry: Record<string, number>;
};

export const EMPTY_VISITOR_STATS: VisitorStats = {
  total: 0,
  unique: 0,
  countryCount: 0,
  byCountry: {},
};

export const VISITOR_KEYS = {
  total: "visitors:total",
  uniqueAll: "visitors:unique:all",
  countries: "visitors:countries",
} as const;
