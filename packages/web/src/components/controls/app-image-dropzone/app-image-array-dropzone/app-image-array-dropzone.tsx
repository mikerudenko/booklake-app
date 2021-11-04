import React, { memo, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FieldRenderProps } from 'react-final-form';
import noop from 'lodash/noop';
import c from 'classnames';

import { appImageArrayDropzoneMessages } from './app-image-array-dropzone.messages';
import { useAppImageDropzoneStyles } from '../use-app-image-dropzone-styles';
import {
  AppImageDropzoneProps,
  AppImageDropzoneFile,
} from '../app-image-dropzone.types';
import { useAppImageDropzoneLogic } from '../use-app-image-dropzone-logic';

export const AppImageArrayDropzone = memo(
  ({
    containerClassName,
  imageDropzoneType,
    input: { onChange = noop, value },
  }: AppImageDropzoneProps & FieldRenderProps<string[], any>) => {
    const initialFiles = value.map(singleValue =>
      typeof singleValue === 'string'
        ? { file: null, preview: singleValue }
        : { file: singleValue, preview: URL.createObjectURL(singleValue) },
    );
    const [internalFiles, setInternalFiles] = useState<AppImageDropzoneFile[]>(
      initialFiles,
    );
    const classes = useAppImageDropzoneStyles();
    const { containerClasses } = useAppImageDropzoneLogic({
      imageDropzoneType,
      containerClassName,
    });
    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: (files: File[], rejectedFiles) => {
        if (rejectedFiles.length) {
          console.log(appImageArrayDropzoneMessages.invalidFiles);
        }
        setInternalFiles(
          files.map(file => ({
            file,
            preview: URL.createObjectURL(file),
          })),
        );
        onChange(files);
      },
    });

    const removeFile = (previewToRemove: string) => () => {
      const newInternalFiles = internalFiles.filter(
        ({ preview }) => preview !== previewToRemove,
      );
      const files = newInternalFiles.map(({ file }) => file);
      setInternalFiles(newInternalFiles);
      onChange(files);
    };

    const thumbs = internalFiles.map(({ preview }, index) => (
      <div className={containerClasses} key={index}>
        <img src={preview} className={c(classes.image)} alt='' />
        <IconButton
          aria-label='delete'
          className={classes.removeFile}
          onClick={removeFile(preview)}
          size='small'
        >
          <RemoveCircleIcon fontSize='inherit' />
        </IconButton>
      </div>
    ));

    useEffect(
      () => () => {
        internalFiles.forEach(({ preview }) => URL.revokeObjectURL(preview));
      },
      [internalFiles],
    );

    return (
      <section className='container'>
        <section className={classes.imagesContainer}>{thumbs}</section>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Button
            variant='contained'
            color='default'
            startIcon={<CloudUploadIcon />}
          >
            Upload images
          </Button>
        </div>
      </section>
    );
  },
);
