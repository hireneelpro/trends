import { CategoryItem } from "../categories/categories.types";

export enum TYPES_OF_CART {
  CART_ITEMS = "CART_ITEMS",
  CART_TOGGLE = "CART_TOGGLE",
  CART_TOTAL = "CART_TOTAL",
  CART_COUNT = "CART_COUNT",
}

export type CartItem = CategoryItem & { quantity: number };
