import ColorSquare from '@components/Color/Color';
import ColorList from '@components/Color/ColorList';
import ColorPickerModal from '@components/ColorPicker';
import EmptyGradientList from '@components/Gradient/EmptyGradientList';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import AddButton from '@components/ui/buttons/AddButton';
import ColorPickerButton from '@components/ui/buttons/ColorPickerButton';
import Text from '@components/ui/text/Text';
import Color from '@models/Color';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import { Colors, Globals } from '@styles/index';
import { Colors as ColorsType, Color as ColorType } from '@typeDefs/index';
import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

type Props = NavigationScreenProps<'Image'>;

const CreateFromInputScreen: React.FC<Props> = (props) => {
  const userColors = useSelector<{ gradient: { userColors: ColorsType } }, ColorsType>(
    (state) => state.gradient.userColors
  );
  const [selectedColors, setSelectedColors] = useState<ColorsType>([]);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  let colors = userColors.map((userColor) => {
    const focused = selectedColors.some((selectedColor) => selectedColor.hex === userColor.hex);
    const rgb = Color.hexToRgb(userColor.hex);
    const color = new Color(rgb);
    return {
      hex: color.hex,
      name: color.name,
      id: userColor.id,
      shade: color.shade,
      inten: color.inten,
      focused,
    };
  });

  if (filter.length > 0) {
    colors = colors.filter(
      (newColor) =>
        newColor.name.toLowerCase() === filter ||
        newColor.hex.toLowerCase() === filter ||
        newColor.shade!.toLowerCase() === filter ||
        `${newColor.inten!.toLowerCase()} ${newColor.shade!.toLowerCase()}` === filter
    );
  }

  const onFilterHandler = useCallback((text: any) => {
    setFilter(text.toLowerCase());
  }, []);

  const onIconPressHandler = useCallback((color: ColorType) => {
    setSelectedColors((prevState) => {
      const newColor = prevState.some((gradientColor) => gradientColor.hex === color.hex);
      if (newColor) {
        return prevState.filter((gradientColor) => gradientColor.hex !== color.hex);
      } else {
        if (prevState.length < 5) {
          return prevState.concat(color);
        }
        return prevState;
      }
    });
  }, []);

  const onSelectHandler = useCallback(
    (color: ColorType) => {
      onIconPressHandler(color);
    },
    [onIconPressHandler]
  );

  const toggleShowModalHandler = useCallback(() => {
    setShowModal((prevState) => !prevState);
  }, []);

  const colorPickHandler = useCallback((colorHex: string) => {
    const rgb = Color.hexToRgb(colorHex);
    const color = new Color(rgb);
    setSelectedColors((prevState) => {
      const newColor = prevState.some((gradientColor) => gradientColor.hex === color.hex);
      if (!newColor && prevState.length < 5) {
        return prevState.concat(color);
      }
      return prevState;
    });
  }, []);

  const onColorDeleteHandler = useCallback((color: ColorType) => {
    setSelectedColors((prevState) => {
      return prevState.filter((gradientColor) => gradientColor.hex !== color.hex);
    });
  }, []);

  const saveGradientHandler = useCallback(() => {
    props.navigation.navigate('New', { colors: selectedColors });
  }, [props.navigation, selectedColors]);

  useEffect(() => {
    if (userColors.length <= 0) {
      setShowModal(true);
    } else {
      if (showModal) {
        setShowModal(false);
      }
    }
  }, [userColors, showModal]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ColorPickerButton
            size={Globals.COLOR_SIZE}
            iconSize={24}
            onPress={toggleShowModalHandler}
            focused={!!showModal}
          />
          {selectedColors.length === 5 && (
            <AddButton size={Globals.COLOR_SIZE} iconSize={26} onPress={saveGradientHandler} />
          )}
        </View>
      ),
    });
  }, [showModal, props.navigation, toggleShowModalHandler, selectedColors, saveGradientHandler]);

  let items = (
    <EmptyGradientList
      title="No colors chosen"
      body="Please select colors in order to create a gradient or get suggestions"
    />
  );

  if (selectedColors.length > 0) {
    items = (
      <View style={styles.colorContainer}>
        {selectedColors.map((color, index) => {
          return (
            <TouchableOpacity
              key={color.hex}
              activeOpacity={Globals.ACTIVE_OPACITY}
              onPress={() => onColorDeleteHandler(color)}
            >
              <ColorSquare
                color={color.hex}
                fill
                colorStyles={{
                  borderTopLeftRadius: index === 0 ? Globals.BORDER_RADIUS_SMALL : 0,
                  borderBottomLeftRadius: index === 0 ? Globals.BORDER_RADIUS_SMALL : 0,
                  borderTopRightRadius:
                    index === selectedColors.length - 1 ? Globals.BORDER_RADIUS_SMALL : 0,
                  borderBottomRightRadius:
                    index === selectedColors.length - 1 ? Globals.BORDER_RADIUS_SMALL : 0,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  const modal = <ColorPickerModal onPress={colorPickHandler} />;

  const output = (
    <>
      <Header
        title={{ text: 'Create a Gradient', location: 'above', color: Colors.PINK }}
        showInput
        showInputColors={{
          backgroundColors: [Colors.ORANGE, Colors.PINK],
          color: 'white',
          placeholderColor: 'white',
          iconColor: 'white',
        }}
        searchInputPlaceholder="Search your colors"
        searchInputOnChangeHandler={() => {}}
        onSubmitEditingHandler={onFilterHandler}
        autoFocus={false}
      />
      <View style={styles.main}>
        {items}
        {!showModal ? (
          <View style={{ flex: 1 }}>
            <View style={[styles.row, { marginBottom: 6, marginTop: 25 }]}>
              <Text color={Colors.PINK}>Your colors</Text>
              {filter.length > 0 && (
                <TouchableOpacity
                  activeOpacity={Globals.ACTIVE_OPACITY}
                  onPress={() => setFilter('')}
                >
                  <Text color={Colors.BLUE}>Clear</Text>
                </TouchableOpacity>
              )}
            </View>
            <ColorList
              items={colors}
              flatList
              checkmarkIcon
              emptyText={{
                title: 'No colors',
                body: 'Try clearing your filter and searching more generally',
              }}
              onSaveColorHandler={() => {}}
              onSelectItemHandler={onSelectHandler}
            />
          </View>
        ) : (
          modal
        )}
      </View>
    </>
  );

  return (
    <Layout header whiteBackground>
      <View style={styles.container}>{output}</View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  buttonContainer: {
    justifyContent: 'center',
    flex: 1,
    maxHeight: 200,
  },
  checkMarkIcon: {
    borderWidth: 1,
    borderColor: Colors.LIGHT_GRAY,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH_THIN,
    height:
      Globals.MAX_CONTENT_WIDTH_THIN > Globals.CONTENT_WIDTH
        ? Globals.CONTENT_WIDTH / 5
        : Globals.MAX_CONTENT_WIDTH_THIN / 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  buttonComponentWrapper: {
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
    marginVertical: 12,
  },
});

export default React.memo(CreateFromInputScreen);
