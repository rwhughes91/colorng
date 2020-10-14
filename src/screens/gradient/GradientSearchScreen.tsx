import EmptyGradientList from '@components/Gradient/EmptyGradientList';
import GradientList from '@components/Gradient/GradientList';
import Header from '@components/layouts/Header/Header';
import Layout from '@components/layouts/Layout';
import LabelText from '@components/texts/LabelText';
import Loader from '@components/ui/Loader';
import ColorButtons from '@components/ui/buttons/TagButton/TagButtons';
import { NavigationScreenProps } from '@navigations/GradientNavigator';
import Firebase from '@services/firebase/client';
import { Colors, Globals } from '@styles/index';
import { Gradients } from '@typeDefs/index';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = NavigationScreenProps<'Search'>;

const GradientSearch: React.FC<Props> = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [gradients, setGradients] = useState<Gradients>([]);
  const [loading, setLoading] = useState(false);
  const firstTag = useRef('');
  const startAtRef = useRef(0);

  const LIMIT = 100;

  const pullGradientsHandler = useCallback((eq: string, startAt = 0) => {
    return Firebase.paginateDataArray<Gradients>(
      'gradients',
      [
        {
          field: 'colorSearch',
          operator: 'array-contains',
          eq,
        },
      ],
      'likes',
      LIMIT,
      startAt
    );
  }, []);

  useEffect(() => {
    if (tags.length === 1 && tags[0] !== firstTag.current) {
      setLoading(true);
      pullGradientsHandler(tags[0])
        .then((res) => {
          startAtRef.current = startAtRef.current + res.length;
          firstTag.current = tags[0];
          setLoading(false);
          setGradients(res as any);
        })
        .catch(() => {
          setLoading(false);
        });
    } else if (tags.length === 0) {
      setGradients([]);
    }
  }, [tags, pullGradientsHandler]);

  const appendTagHandler = useCallback((text: string) => {
    setTags((prevState) => {
      return Array.from(new Set(prevState.concat(text.toLowerCase())));
    });
  }, []);

  const deleteTagHandler = useCallback((text: string) => {
    setTags((prevState) => {
      return prevState.filter((item) => item !== text);
    });
  }, []);

  const additionalFilters = tags.length > 1 ? tags.slice(1) : [];

  const filteredGradients =
    tags.length > 1
      ? gradients.filter((gradient) => {
          let returnValue = false;
          for (const filter of additionalFilters) {
            if (gradient.colorSearch.includes(filter)) {
              returnValue = true;
            } else {
              return false;
            }
          }
          return returnValue;
        })
      : gradients;

  let output = (
    <EmptyGradientList
      title="No gradients found"
      body="Note, the only adjectives we support are light, dark, and semi-dark. Additionally, you can only add adjectives to shades (e.g., light red, dark blue, semi-dark yellow, etc.)"
    />
  );
  if (tags.length === 0) {
    output = (
      <EmptyGradientList
        title="Search for a color above"
        body="You can search generally (e.g., red or semi-dark blue), by a more specific color (e.g., #ebeef2), or by a color name (e.g., almond)."
      />
    );
  }

  if (filteredGradients.length > 0) {
    output = (
      <>
        <LabelText>{`Results: ${filteredGradients.length} gradients`}</LabelText>
        <GradientList gradients={filteredGradients} />
      </>
    );
  }

  if (loading) {
    output = <Loader />;
  }

  return (
    <Layout header whiteBackground>
      <View style={styles.container}>
        <Header
          title={{ text: 'Find a Gradient', location: 'above', color: Colors.PINK }}
          showInput
          showInputColors={{
            backgroundColors: [Colors.PINK, Colors.ORANGE],
            color: 'white',
            placeholderColor: 'white',
            iconColor: 'white',
          }}
          onSubmitEditingHandler={appendTagHandler}
          searchInputPlaceholder="Ex: light blue, #ebeef2, or almond"
        />
        <View style={styles.buttonWrapper}>
          <ColorButtons buttons={tags} onPress={deleteTagHandler} />
        </View>
        <View style={styles.main}>{output}</View>
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
    maxWidth: Globals.MAX_CONTENT_WIDTH_THIN,
  },
  main: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default React.memo(GradientSearch);
