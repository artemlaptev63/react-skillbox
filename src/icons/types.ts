export type IconCommonProps = {
  iconName: EIcons;
  className?: string;
  height?: string;
  width?: string;
}

export type IconProps = Omit<IconCommonProps, "iconName">;

export enum EIcons {
  ARROW,
  ARROW_DOWN,
  ARROW_UP,
  COMMENT,
  COMPLAIN,
  DOTS,
  HIDE,
  REMOVE,
  SAVE,
  SHARE,
  SHARE_STROKE,
};