import React from "react"

export function withKey(key?: string) {
  return <E extends Record<string, unknown>, T extends React.ComponentType<E>>(component: T) => {
    return (props: E, index: number) => {
      return React.createElement(
        component,
        {...props, key: key ? props[key as keyof E] : index},
        [],
      )
    }
  }
}