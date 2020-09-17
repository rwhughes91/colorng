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
        id="Icon_material-color-lens"
        data-name="Icon material-color-lens"
        d="M15.25,3.75a11.5,11.5,0,1,0,0,23,1.918,1.918,0,0,0,1.418-3.207A1.909,1.909,0,0,1,18.1,20.361h2.262a6.391,6.391,0,0,0,6.389-6.389C26.75,8.324,21.6,3.75,15.25,3.75ZM8.222,15.25a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,8.222,15.25Zm3.833-5.111a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,12.056,10.139Zm6.389,0a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,18.444,10.139Zm3.833,5.111a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,22.278,15.25Z"
        transform="translate(-3.25 -3.25)"
        fill={props.color}
        stroke={props.color}
        strokeWidth="1"
      />
    </Svg>
  ) : (
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
      <Path
        id="Icon_material-color-lens"
        data-name="Icon material-color-lens"
        d="M15.25,3.75a11.5,11.5,0,1,0,0,23,1.918,1.918,0,0,0,1.418-3.207A1.909,1.909,0,0,1,18.1,20.361h2.262a6.391,6.391,0,0,0,6.389-6.389C26.75,8.324,21.6,3.75,15.25,3.75ZM8.222,15.25a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,8.222,15.25Zm3.833-5.111a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,12.056,10.139Zm6.389,0a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,18.444,10.139Zm3.833,5.111a1.917,1.917,0,1,1,1.917-1.917A1.914,1.914,0,0,1,22.278,15.25Z"
        transform="translate(-3.25 -3.25)"
        fill="none"
        stroke={props.color}
        strokeWidth="1"
      />
    </Svg>
  );
};

export default React.memo(ExploreIcon);
