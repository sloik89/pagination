### Paginate function

- pages = 12
- slice( with startIndex,without endIndex)

```js
export const paginate = (items) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(items.length / itemsPerPage);

  const newFallowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
  console.log(newFallowers);
};
```
