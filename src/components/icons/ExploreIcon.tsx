import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  focused: boolean;
  size: number;
  color: string;
}

const ExploreIcon: React.FC<Props> = (props) => {
  return props.focused ? (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
      <Path
        id="Icon_material-explore"
        data-name="Icon material-explore"
        d="M14,12.735A1.265,1.265,0,1,0,15.265,14,1.261,1.261,0,0,0,14,12.735ZM14,2.5A11.5,11.5,0,1,0,25.5,14,11.5,11.5,0,0,0,14,2.5Zm2.518,14.018L7.1,20.9l4.381-9.418L20.9,7.1Z"
        transform="translate(-2 -2)"
        fill={props.color}
        stroke={props.color}
        strokeWidth="1"
      />
    </Svg>
  ) : (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
      <Path
        id="Icon_material-explore"
        data-name="Icon material-explore"
        d="M14,12.735A1.265,1.265,0,1,0,15.265,14,1.261,1.261,0,0,0,14,12.735ZM14,2.5A11.5,11.5,0,1,0,25.5,14,11.5,11.5,0,0,0,14,2.5Zm2.518,14.018L7.1,20.9l4.381-9.418L20.9,7.1Z"
        transform="translate(-2 -2)"
        fill="none"
        stroke={props.color}
        strokeWidth="1"
      />
    </Svg>
  );
};

export default React.memo(ExploreIcon);
