import { CreditCard } from '@booklake/core';
import { firebaseFirestore } from '../services/firebase-service';

export const manageCreditCard = ({ id, ...rest }: CreditCard) =>
  firebaseFirestore
    .collection('creditCards')
    .doc(id)
    .set(rest, { merge: true });

export const getCreditCard = async (managerId: string) => {
  let creditCard: Partial<CreditCard> = {};
  const ref = await firebaseFirestore
    .collection('creditCards')
    .where('managerId', '==', managerId)
    .get();

  ref.forEach((doc: any) => {
    creditCard = { id: doc.id, ...doc.data() };
  });

  return creditCard;
};
