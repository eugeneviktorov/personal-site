export interface IProjectItem {
  item: IItem;
}

export interface IItem {
  title: string;
  link: string;
  image: string;
  description: string;
  favorite: boolean;
  working: boolean;
}
