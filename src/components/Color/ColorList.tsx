import { Colors } from '@styles/index';
import { Colors as ColorsType } from '@typeDefs/index';
import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet, TextStyle, FlatList } from 'react-native';

import ColorItem from './ColorItem';
import EmptyColorList from './EmptyColorList';

interface Props {
  items: ColorsType & { focused?: boolean };
  fill?: boolean;
  styles?: StyleProp<ViewStyle>;
  textStylesView?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  icon?: boolean;
  flatList?: boolean;
  colorsOnly?: boolean;
  noRadius?: boolean;
  customIcon?: React.ReactNode;
  listHeaderComponent?: any;
  emptyStyles?: StyleProp<ViewStyle>;
  checkmarkIcon?: boolean;
  iconPress?: (x: any) => void;
  emptyText?: { title: string; body: string };
}

const ColorList: React.FC<Props> = (props) => {
  const listItemStyles: object = props.styles || {};
  const containerStyles = { ...styles.colorList, flex: props.fill ? 1 : 0 };

  const renderItem: (x: any) => any = ({ item, index }) => {
    const colorStyles = {};
    let borderStyles = {};
    if (index === 0) {
      borderStyles = { borderColor: Colors.LIGHT_GRAY, borderTopWidth: 1 };
    }
    return (
      <ColorItem
        {...item}
        key={index}
        fill={props.fill}
        icon={props.icon}
        styles={[listItemStyles, borderStyles]}
        colorStyles={!props.colorsOnly && !props.noRadius && colorStyles}
        textStylesView={props.textStylesView}
        textStyles={props.textStyles}
        colorOnly={props.colorsOnly}
        customIcon={props.customIcon}
        checkmarkIcon={props.checkmarkIcon}
        iconPress={props.iconPress}
      />
    );
  };

  if (props.items.length === 0) {
    return <EmptyColorList styles={props.emptyStyles} emptyText={props.emptyText} />;
  }

  return props.flatList ? (
    <FlatList
      data={props.items}
      contentContainerStyle={[containerStyles, { flex: 0 }]}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={props.listHeaderComponent}
    />
  ) : (
    <View style={[containerStyles, props.containerStyles]}>
      {props.items.map((item, index) => {
        return renderItem({ item, index });
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  colorList: {
    overflow: 'hidden',
  },
});

export default React.memo(ColorList);
