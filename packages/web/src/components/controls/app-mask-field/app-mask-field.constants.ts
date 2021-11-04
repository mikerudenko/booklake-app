export enum MaskType {
  phone = 'phone',
  card = 'card',
}

// TODO will change in future
export const MaskMap = {
  [MaskType.phone]: '(999)-999-99-99',
  [MaskType.card]: '9999-9999-9999-9999',
};
