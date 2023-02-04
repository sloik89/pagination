export const paginate = (items) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(items.length / itemsPerPage);
  console.log(pages);
  const newFallowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
  return newFallowers;
};
