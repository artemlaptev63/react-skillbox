interface MyArray<T> {
  [N: number]: T;
  reduce<V>(fn:(acc: V, currentItem: T, index: number, arr: Array<T>) => V, initialValue: V): V;
};
