import useNavigation from '@hooks/useNavigation';
import * as ImagePickerPackage from 'expo-image-picker';
import React, { useEffect } from 'react';
import { Platform, Alert } from 'react-native';

interface Props {
  onImagePickCancelled?: () => void;
  onImagePicked?: () => void;
}

const ImagePicker: React.FC<Props> = (props) => {
  const { onImagePickCancelled, onImagePicked } = props;

  const navigate = useNavigation<{ uri: string }>({ name: 'Image' });

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status: statusRoll } = await ImagePickerPackage.requestCameraRollPermissionsAsync();
        const { status: statusCamera } = await ImagePickerPackage.requestCameraPermissionsAsync();
        if (statusRoll === 'granted' && statusCamera === 'granted') {
          const result = await ImagePickerPackage.launchImageLibraryAsync({
            mediaTypes: ImagePickerPackage.MediaTypeOptions.Images,
            quality: 0,
          });
          if (result.cancelled) {
            onImagePickCancelled && onImagePickCancelled();
          } else {
            navigate({ uri: result.uri });
            onImagePicked && onImagePicked();
          }
        } else {
          Alert.alert('Sorry', 'We need camera and camera roll permissions to make this work');
        }
      }
    })();
  }, [onImagePickCancelled, navigate, onImagePicked]);

  return null;
};

export default React.memo(ImagePicker);
