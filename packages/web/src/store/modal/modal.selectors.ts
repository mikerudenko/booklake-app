import { ModalSlice } from './modal.slice';
import { ModalState } from './modal.types';
import { createFeatureSelector } from '../../store-utils';

export const selectModalFeature = createFeatureSelector<ModalState>(
  ModalSlice.name,
);

export const constructSelectModalStatus = (id: string) => ({
  modal: { list },
}: any) => list[id] || false;
