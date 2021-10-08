import React from "react";
import {ArrowIcon} from "./arrow";
import {ArrowDownIcon} from "./arrow-down";
import {ArrowUpIcon} from "./arrow-up";
import {CommentIcon} from "./comment";
import {ComplainIcon} from "./complain";
import {DotsIcon} from "./dots";
import {HideIcon} from "./hide";
import {RemoveIcon} from "./remove";
import {SaveIcon} from "./save";
import {ShareIcon} from "./share";
import {ShareStrokeIcon} from "./share/stroke";
import {EIcons, IconCommonProps} from "./types";

type PossibleIcons = {
  [key in EIcons]: JSX.Element;
};

export function Icon(props: IconCommonProps) {
  const {iconName, ...rest} = props;

  const icons: PossibleIcons = {
    [EIcons.ARROW]: <ArrowIcon {...rest}/>,
    [EIcons.ARROW_DOWN]: <ArrowDownIcon {...rest}/>,
    [EIcons.ARROW_UP]: <ArrowUpIcon {...rest}/>,
    [EIcons.COMMENT]: <CommentIcon {...rest}/>,
    [EIcons.COMPLAIN]: <ComplainIcon {...rest}/>,
    [EIcons.DOTS]: <DotsIcon {...rest}/>,
    [EIcons.HIDE]: <HideIcon {...rest}/>,
    [EIcons.REMOVE]: <RemoveIcon {...rest}/>,
    [EIcons.SAVE]: <SaveIcon {...rest}/>,
    [EIcons.SHARE]: <ShareIcon {...rest}/>,
    [EIcons.SHARE_STROKE]: <ShareStrokeIcon {...rest}/>
  }

  return icons[iconName];
}