import Loader from '@components/ui/Loader';
import * as FileSystem from 'expo-file-system';
import React, { useState, useEffect, useCallback } from 'react';
import { WebView } from 'react-native-webview';

import canvasHtml from './canvasHtml';

interface Props {
  uri: string;
  onError: () => void;
  onColorPalette: (palette: any[]) => void;
}

const ColorExtract: React.FC<Props> = (props) => {
  const { onError, onColorPalette } = props;
  const [base64, setBase64] = useState<string | null>(null);

  const imageResponse = useCallback(
    (event: any) => {
      onColorPalette(JSON.parse(event.nativeEvent.data).colors);
    },
    [onColorPalette]
  );

  useEffect(() => {
    (async () => {
      try {
        const image = await FileSystem.readAsStringAsync(props.uri, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setBase64(image);
      } catch (error) {
        onError();
      }
    })();
  }, [props.uri, onError]);

  let output = <Loader />;

  if (base64) {
    output = (
      <WebView source={{ html: canvasHtml(base64) }} javaScriptEnabled onMessage={imageResponse} />
    );
  }
  return output;
};

export default React.memo(ColorExtract);
