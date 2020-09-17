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
        id="Icon_awesome-user-circle"
        data-name="Icon awesome-user-circle"
        d="M11.5.469A11.5,11.5,0,1,0,23,11.969,11.5,11.5,0,0,0,11.5.469Zm0,4.452A4.081,4.081,0,1,1,7.419,9,4.081,4.081,0,0,1,11.5,4.92Zm0,15.952a8.886,8.886,0,0,1-6.793-3.163,5.17,5.17,0,0,1,4.568-2.773,1.135,1.135,0,0,1,.329.051,6.14,6.14,0,0,0,1.9.32,6.116,6.116,0,0,0,1.9-.32,1.135,1.135,0,0,1,.329-.051,5.17,5.17,0,0,1,4.568,2.773A8.886,8.886,0,0,1,11.5,20.872Z"
        transform="translate(0.5 0.031)"
        fill={props.color}
        stroke={props.color}
        strokeWidth="1"
      />
    </Svg>
  ) : (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
      <Path
        id="Icon_awesome-user-circle"
        data-name="Icon awesome-user-circle"
        d="M11.5.469A11.5,11.5,0,1,0,23,11.969,11.5,11.5,0,0,0,11.5.469Zm0,4.452A4.081,4.081,0,1,1,7.419,9,4.081,4.081,0,0,1,11.5,4.92Zm0,15.952a8.886,8.886,0,0,1-6.793-3.163,5.17,5.17,0,0,1,4.568-2.773,1.135,1.135,0,0,1,.329.051,6.14,6.14,0,0,0,1.9.32,6.116,6.116,0,0,0,1.9-.32,1.135,1.135,0,0,1,.329-.051,5.17,5.17,0,0,1,4.568,2.773A8.886,8.886,0,0,1,11.5,20.872Z"
        transform="translate(0.5 0.031)"
        fill="none"
        stroke={props.color}
        strokeWidth="1"
      />
    </Svg>
  );
};

export default React.memo(ExploreIcon);
