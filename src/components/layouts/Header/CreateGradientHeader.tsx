import SearchInput from '@components/ui/inputs/SearchInput';
import * as Constants from '@constants/index';
import { Globals } from '@styles/index';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

import styles from './HeaderStyles';

interface Props {
  onSubmit: (key: string, value: string) => void;
}

const CreateGradientHeader: React.FC<Props> = (props) => {
  const { onSubmit } = props;
  const onChangeHandler = useCallback(
    (key: string, value) => {
      onSubmit(key, value.nativeEvent.text);
    },
    [onSubmit]
  );

  const onSubmitEditingHandler = useCallback(() => {}, []);

  return (
    <View
      style={[
        styles.header,
        { justifyContent: 'space-around' },
        Constants.DEVICE_HEIGHT > Globals.HEIGHT_BREAKPOINT
          ? { marginTop: Globals.HEADER_MARGINS / 2, minHeight: 150 }
          : null,
      ]}
    >
      <SearchInput
        noIcon
        inputStyles={headerStyles.input}
        placeholder="Name"
        onChangeHandler={(value: string) => onChangeHandler('name', value)}
        onSubmitEditingHandler={onSubmitEditingHandler}
        autoFocus={false}
      />
      <SearchInput
        noIcon
        inputStyles={headerStyles.input}
        placeholder="Description"
        onChangeHandler={(value: string) => onChangeHandler('description', value)}
        onSubmitEditingHandler={onSubmitEditingHandler}
        autoFocus={false}
      />
    </View>
  );
};

const headerStyles = StyleSheet.create({
  input: {
    textAlign: 'center',
  },
});

export default React.memo(CreateGradientHeader);
