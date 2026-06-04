export const BASE_PATH = "/shop-react";

export const ROUTES = {
  HOME: `${BASE_PATH}`,
  LOGIN: `${BASE_PATH}/login`,
  CART: `${BASE_PATH}/cart`,
  CATEGORIES: `${BASE_PATH}/categories`,
  CATEGORY: (slug) => `${BASE_PATH}/category/${slug}`,
  PRODUCT: (id) => `${BASE_PATH}/product/${id}`,
  ADMIN: `${BASE_PATH}/admin`,
  ADMIN_PRODUCTS: `${BASE_PATH}/admin/products`,
  ADMIN_USERS: `${BASE_PATH}/admin/users`,
};

export const HIDE_NAV_ROUTES = [
  ROUTES.LOGIN,
  ROUTES.CART,
  ROUTES.ADMIN,
  ROUTES.ADMIN_PRODUCTS,
  ROUTES.ADMIN_USERS,
];

export const HIDE_FOOTER_ROUTES = HIDE_NAV_ROUTES;
