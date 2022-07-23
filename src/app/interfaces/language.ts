export interface LanguageResult {
  data: Language[];
  meta: Meta;
}

export interface Meta {
  page: number;
}

export interface Language {
  id: number;
  name: string;
  description: string;
  year: number;
}