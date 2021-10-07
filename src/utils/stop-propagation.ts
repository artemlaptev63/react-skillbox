export function stopPropagation<T extends (e: any) => void>(fn: T) {
  <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  }
}
