export type ListContent = {
  subtitle: string;
  description: string;
  slug?: string;
  icon?: () => JSX.Element;
};

export type BasicContent = {
  title: string;
  description?: string;
  list?: ListContent[];
};

export type ContentStructure = {
  [key: string]: BasicContent;
};
