import Layout from '@components/layouts/Layout';
import Form from '@components/ui/Form';
import HeaderText from '@components/ui/text/HeaderText';
import useForm from '@hooks/useForm';
import { NavigationScreenProps } from '@navigations/AuthNavigator';
import { Globals, Colors } from '@styles/index';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateVerticalScale } from 'react-native-size-matters';

type Props = NavigationScreenProps<'Login'>;

const LoginScreen: React.FC<Props> = () => {
  const initialState = {
    email: {
      placeholder: 'Email',
      value: '',
    },
    password: {
      placeholder: 'Password',
      value: '',
    },
  };
  const [formState, dispatch] = useForm(initialState);

  const onChangeHandler = useCallback(
    (key: string, value: string) => {
      dispatch({ type: 'change', key, value });
    },
    [dispatch]
  );

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.header}>
          <HeaderText color={Colors.PINK}>Login</HeaderText>
        </View>
        <Form
          buttonTitle="Login"
          showSignUpContainer
          formFields={[
            {
              text: 'Email',
              placeholder: formState.email.placeholder,
              value: formState.email.value,
              onChange: onChangeHandler,
              secureTextEntry: false,
            },
            {
              text: 'Password',
              placeholder: formState.password.placeholder,
              value: formState.password.value,
              onChange: onChangeHandler,
              secureTextEntry: true,
            },
          ]}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingBottom: 15,
    borderBottomColor: Colors.PINK,
    borderBottomWidth: 1,
    marginBottom: moderateVerticalScale(15),
  },
});

export default React.memo(LoginScreen);