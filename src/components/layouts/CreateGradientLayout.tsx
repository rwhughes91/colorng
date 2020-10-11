import ColorListLayout from '@components/layouts/ColorListLayout';
import CreateGradientHeader from '@components/layouts/Header/CreateGradientHeader';
import Main from '@components/layouts/Main';
import Button from '@components/ui/buttons/Button';
import useForm from '@hooks/useForm';
import { Colors } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface Props {
  gradientColors: Colors;
  loading?: boolean;
  onSubmit: (name: string, description: string) => void;
  icons?: boolean;
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

  return (
    <>
      <View style={styles.container}>
        <CreateGradientHeader onSubmit={onChangeHandler} />
        <Main small styles={{ paddingBottom: 10 }}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <ColorListLayout
              colors={props.gradientColors}
              title="Colors"
              icon={props.icons !== undefined ? props.icons : true}
            />
            <View style={styles.buttonContainer}>
              <Button onPress={onSubmitHandler} loading={props.loading}>
                Save
              </Button>
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
