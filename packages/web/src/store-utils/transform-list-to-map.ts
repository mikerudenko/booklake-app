export const transformListToMap = <T>(
  list: Array<T & { id: string }>,
): Record<string, T> => {
  return list.reduce((map, item) => {
    map[item.id] = item;

    return map;
  }, {} as Record<string, T>);
};
