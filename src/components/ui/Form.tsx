import Button from '@components/ui/buttons/Button';
import CardButton from '@components/ui/buttons/CardButton';
import FormInput, { inputTypes } from '@components/ui/inputs/FormInput';
import Text from '@components/ui/text/Text';
import { Colors } from '@styles/index';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface Props {
  formFields: {
    text: string;
    placeholder: string;
    onChange: (key: string, value: string) => void;
    value: string;
    secureTextEntry: boolean;
  }[];
  showSignUpContainer: boolean;
  buttonTitle: string;
}

const MARGIN = moderateScale(15);
const PADDING = moderateScale(3);

const Form: React.FC<Props> = (props) => {
  const formFields = props.formFields.map((formField) => {
    const onChangeHandler = (value: string) => {
      formField.onChange(formField.text.toLowerCase(), value);
    };
    return (
      <View style={styles.formControl} key={formField.text}>
        <Text color={Colors.BLUE} styles={{ marginBottom: PADDING }}>
          {formField.text}
        </Text>
        <FormInput
          styles={styles.searchInput}
          placeholder={formField.placeholder}
          onChangeText={onChangeHandler}
          value={formField.value}
          type={inputTypes.INPUT}
          secureTextEntry={formField.secureTextEntry}
        />
      </View>
    );
  });

  return (
    <View style={styles.form}>
      {formFields}
      <View style={styles.buttonContainer}>
        <Button>{props.buttonTitle}</Button>
        {props.showSignUpContainer && (
          <View style={styles.signUpContainer}>
            <Text color={Colors.GRAY}>Don't have an account?</Text>
            <CardButton
              color={Colors.BLUE}
              styles={{ marginLeft: MARGIN / 2 }}
              navigation={{ name: 'SignUp' }}
            >
              Sign up
            </CardButton>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    width: '100%',
  },
  formControl: { marginBottom: MARGIN },
  searchInput: {
    borderRadius: 3,
    paddingLeft: moderateScale(5),
  },
  buttonContainer: {
    marginTop: MARGIN,
  },
  signUpContainer: {
    marginTop: moderateScale(5),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default React.memo(Form);
