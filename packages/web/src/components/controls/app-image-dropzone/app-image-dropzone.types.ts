export enum ImageDropZoneType {
  round = 'round',
  circle = 'circle',
}

export interface AppImageDropzoneProps {
  imageDropzoneType?: ImageDropZoneType;
  width: number;
  height: number;
  containerClassName?: string;
}

export interface AppImageDropzoneFile {
  file: File | null;
  preview: string;
}
