import ColorListLayout from '@components/layouts/ColorListLayout';
import CreateGradientHeader from '@components/layouts/Header/CreateGradientHeader';
import Main from '@components/layouts/Main';
import Button from '@components/ui/buttons/Button';
import SaveButton from '@components/ui/buttons/SaveButton';
import * as Constants from '@constants/index';
import useForm from '@hooks/useForm';
import { Globals } from '@styles/index';
import { Colors } from '@typeDefs/index';
import React, { useCallback, useLayoutEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface Props {
  gradientColors: Colors;
  loading?: boolean;
  onSubmit: (name: string, description: string) => void;
  icons?: boolean;
  saveHeader?: boolean;
  navigation: any;
  onSaveColorHandler: (x: string, y: string, z: string) => void;
}

const CreateFromImageScreen: React.FC<Props> = (props) => {
  const initialState = {
    name: {
      placeholder: 'Name',
      value: '',
    },
    description: {
      placeholder: 'Description',
      value: '',
    },
  };
  const [formState, formDispatch] = useForm(initialState);

  const onChangeHandler = useCallback(
    (key: string, value: string) => {
      formDispatch({ type: 'change', key, value });
    },
    [formDispatch]
  );

  const { onSubmit } = props;

  const onSubmitHandler = useCallback(() => {
    if (formState.name.value.length > 0) {
      onSubmit(formState.name.value, formState.description.value);
    } else {
      Alert.alert('Invalid', 'You need to give your gradient a name.');
    }
  }, [formState.name.value, formState.description.value, onSubmit]);

  useLayoutEffect(() => {
    if (props.saveHeader) {
      props.navigation.setOptions({
        headerRight: () => <SaveButton size={Globals.COLOR_SIZE} onPress={onSubmitHandler} />,
      });
    }
  }, [props.navigation, props.saveHeader, onSubmitHandler]);

  return (
    <>
      <View style={styles.container}>
        <CreateGradientHeader onSubmit={onChangeHandler} />
        <Main small styles={{ paddingBottom: 10 }}>
          <View style={{ flex: 1 }}>
            <ColorListLayout
              colors={props.gradientColors}
              title="Colors"
              icon={props.icons !== undefined ? props.icons : true}
              flatList={Constants.DEVICE_HEIGHT < 750}
              onSaveColorHandler={props.onSaveColorHandler}
            />
            <View style={styles.buttonContainer}>
              {!props.saveHeader && (
                <Button onPress={onSubmitHandler} loading={props.loading}>
                  Save
                </Button>
              )}
            </View>
          </View>
        </Main>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    flex: 1,
    maxHeight: 200,
  },
  imagePreview: {
    width: moderateScale(70, 0.2),
    height: moderateScale(70, 0.2),
    borderRadius: moderateScale(35, 0.2),
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'absolute',
    opacity: 0,
  },
});

export default React.memo(CreateFromImageScreen);
