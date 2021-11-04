import React, { memo, useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { FieldRenderProps } from 'react-final-form';
import noop from 'lodash/noop';
import { Tooltip } from '@material-ui/core';
import c from 'classnames';

import { useAppImageDropzoneStyles } from '../use-app-image-dropzone-styles';
import { appImageSingleDropzoneMessages } from './app-image-single-dropzone.messages';
import {
  AppImageDropzoneProps,
  AppImageDropzoneFile,
} from '../app-image-dropzone.types';
import { MAX_FILE_SIZE } from '../app-image-dropzone.constants';
import { useAppImageDropzoneLogic } from '../use-app-image-dropzone-logic';

export const AppImageSingleDropzone = memo(
  ({
    imageDropzoneType,
    containerClassName,
    input: { onChange = noop, value },
  }: AppImageDropzoneProps & FieldRenderProps<string, any>) => {
    const initialFile =
      typeof value === 'string'
        ? {
            file: null,
            preview: value,
          }
        : { file: value, preview: URL.createObjectURL(value) };

    const [file, setPreview] = useState<AppImageDropzoneFile>(initialFile);
    const classes = useAppImageDropzoneStyles();
    const { formatMessage } = useIntl();
    const { containerClasses } = useAppImageDropzoneLogic({
      containerClassName,
      imageDropzoneType,
    });

    const onFileDrop = useCallback(
      async ([file], rejectedFiles) => {
        try {
          if (rejectedFiles.length) {
            console.log('invalid file');
          } else {
            setPreview({ file, preview: URL.createObjectURL(file) });
            onChange(file);
          }
        } catch (error) {
          console.log('There is an error in AppImageDropzone man!');
        }
      },
      [onChange],
    );

    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      maxSize: MAX_FILE_SIZE,
      onDrop: onFileDrop,
    });

    useEffect(
      () => () => {
        URL.revokeObjectURL(file.preview);
      },
      [file.preview],
    );

    return (
      <div {...getRootProps()} className={containerClasses}>
        <input {...getInputProps()} />
        <Tooltip title={formatMessage(appImageSingleDropzoneMessages.addImage)}>
          <CloudUploadIcon />
        </Tooltip>
        <img src={file.preview} alt='' className={c(classes.image)} />
      </div>
    );
  },
);
