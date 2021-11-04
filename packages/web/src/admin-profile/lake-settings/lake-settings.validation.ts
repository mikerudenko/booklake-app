import { LakeSettingsValues } from '../../store/lakes';
import {
  validationStrategy,
  EMAIL_STRATEGY,
  PHONE_STRATEGY,
  REQUIRED_STRATEGY,
} from '../../services/validation-service';

export const lakeSettingsValidationStrategy = validationStrategy<
  LakeSettingsValues
>({
  'contacts.email': EMAIL_STRATEGY,
  'contacts.phone': PHONE_STRATEGY,
  'contacts.country': REQUIRED_STRATEGY,
  'contacts.region': REQUIRED_STRATEGY,
  'contacts.lng': REQUIRED_STRATEGY,
  'contacts.lat': REQUIRED_STRATEGY,
  translations: {
    title: REQUIRED_STRATEGY,
    description: REQUIRED_STRATEGY,
    address: REQUIRED_STRATEGY,
  },
  currency: REQUIRED_STRATEGY,
  svgPath: REQUIRED_STRATEGY,
  // managerId: REQUIRED_STRATEGY,
  fishTypes: REQUIRED_STRATEGY,
  fishingTypes: REQUIRED_STRATEGY,
  // creditCard: REQUIRED_STRATEGY,
  mainPicture: REQUIRED_STRATEGY,
  pictures: REQUIRED_STRATEGY,
});
