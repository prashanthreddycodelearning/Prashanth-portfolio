export const createPageUrl = (page) => {
  if (page === "Home") return "/";
  return `/${page.toLowerCase()}`;
};
