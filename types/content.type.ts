export type ListContent = {
  subtitle: string;
  description: string;
  slug?: string;
};

export type BasicContent = {
  title: string;
  description?: string;
  list?: ListContent[];
};

export type ContentStructure = {
  [key: string]: BasicContent;
};
