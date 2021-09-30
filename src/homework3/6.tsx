type TGetJSXPropsProp<K extends keyof JSX.IntrinsicElements> = JSX.IntrinsicElements[K];

type TDivProps = TGetJSXPropsProp<"div">;

const props: TDivProps = {
  className: 'handler', // не выкидывает ошибку так как валидно для div элемента
}