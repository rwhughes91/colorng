import CameraIcon from '@components/icons/CameraIcon';
import PlusIcon from '@components/icons/PlusIcon';
import Card from '@components/ui/Card';
import Text from '@components/ui/text/Text';
import { NavigationScreenProps } from '@navigations/CreateNavigator';
import { Colors, Globals } from '@styles/index';
import React, { useCallback } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

type Props = NavigationScreenProps<'Create'>;

const ICON_WRAPPER_SIZE = Globals.BODY_ICON * 2;
const ACTIVE_OPACITY = 0.5;

const CreateCard: React.FC<Props> = (props) => {
  const onImageClickHandler = useCallback(() => {
    props.navigation.navigate('Image');
  }, [props.navigation]);

  const onInputClickHandler = useCallback(() => {
    props.navigation.navigate('Input');
  }, [props.navigation]);

  return (
    <Card
      body={
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.buttonContainer, { borderBottomWidth: 1 }]}
            activeOpacity={ACTIVE_OPACITY}
            onPress={onImageClickHandler}
          >
            <View style={styles.iconWrapper}>
              <CameraIcon color={Colors.PINK} size={Globals.BODY_ICON - 7} />
            </View>
            <Text color={Colors.BLUE}>Extract colors from a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={ACTIVE_OPACITY}
            onPress={onInputClickHandler}
          >
            <View style={styles.iconWrapper}>
              <PlusIcon color={Colors.PINK} size={Globals.BODY_ICON - 2} />
            </View>
            <Text color={Colors.BLUE}>Get color suggestions</Text>
          </TouchableOpacity>
        </View>
      }
      header={null}
      description={null}
      navigation={null}
      styles={{ flex: 0 }}
      bodyStyles={{ flex: 0 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: moderateScale(6, 0.2),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateScale(12, 0.2),
    borderColor: Colors.LIGHT_GRAY,
  },
  iconWrapper: {
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 1,
    height: ICON_WRAPPER_SIZE,
    width: ICON_WRAPPER_SIZE,
    borderRadius: ICON_WRAPPER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: moderateScale(15),
  },
});

export default React.memo(CreateCard);
