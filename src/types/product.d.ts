export interface IProduct {
  image: string;
  title: string;
  brand: string;
  id: number | string;
  badge?: BadgeType | null;
}

export type BadgeType = "new" | "top";
