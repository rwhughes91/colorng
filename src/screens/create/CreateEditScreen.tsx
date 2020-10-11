import GradientList from '@components/Gradient/GradientList';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import Text from '@components/ui/text/Text';
import useFirebase from '@hooks/useFirebase';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import * as actions from '@store/actions/index';
import { Colors, Globals } from '@styles/index';
import { Gradients } from '@typeDefs/index';
import React, { useCallback } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

type Props = NavigationScreenProps<'Search'>;

const GradientSearch: React.FC<Props> = () => {
  const firebase = useFirebase();
  const dispatch = useDispatch();

  const createdGradients = useSelector<{ gradient: { createdGradients: Gradients } }, Gradients>(
    (state) => state.gradient.createdGradients
  );

  const deleteGradient = useCallback(
    (id: string) => {
      if (firebase?.user) {
        dispatch(actions.deleteGradient(firebase.user.uid, id));
      }
    },
    [firebase?.user, dispatch]
  );

  const onDeleteHandler = useCallback(
    (id: string) => {
      Alert.alert('Are your sure?', 'This is permanent.', [
        { text: 'Cancel' },
        {
          text: 'Confirm',
          onPress: () => {
            deleteGradient(id);
          },
        },
      ]);
    },
    [deleteGradient]
  );

  return (
    <Layout header whiteBackground>
      <View style={styles.container}>
        <Header
          title={{ text: 'Delete your Gradients', location: 'above', color: Colors.PINK }}
          styles={{ marginBottom: 0 }}
        />
        <View style={styles.main}>
          <View style={{ marginBottom: 5 }}>
            <Text color={Colors.PINK}>
              {createdGradients.length !== 1
                ? `${createdGradients.length} gradients`
                : `${createdGradients.length} gradient`}
            </Text>
          </View>
          <GradientList
            gradients={createdGradients}
            icon="delete"
            onItemPress={() => {}}
            onIconPress={onDeleteHandler}
            itemOpacity={1}
            emptyGradientText={{
              title: 'No created gradients',
              body: 'You can create gradients in the previous page!',
            }}
            emptyGradientStyles={{ marginTop: 10 }}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  buttonWrapper: {
    top: -Globals.HEADER_MARGINS,
    width: Globals.CONTENT_WIDTH,
    maxWidth: Globals.MAX_CONTENT_WIDTH,
  },
  main: {
    flex: 1,
    alignSelf: 'stretch',
    top: -25,
  },
});

export default React.memo(GradientSearch);
