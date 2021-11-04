import classnames from 'classnames';

import { useAppImageDropzoneStyles } from './use-app-image-dropzone-styles';
import { ImageDropZoneType } from './app-image-dropzone.types';

interface ImageDropzoneLogic {
  imageDropzoneType?: ImageDropZoneType;
  containerClassName?: string;
}

export const useAppImageDropzoneLogic = ({
  imageDropzoneType,
  containerClassName,
}: ImageDropzoneLogic) => {
  const classes = useAppImageDropzoneStyles();

  const containerClasses = classnames(
    classes.imageContainer,
    imageDropzoneType === ImageDropZoneType.circle && classes.circle,
    containerClassName,
  );

  return {
    containerClasses,
  };
};
