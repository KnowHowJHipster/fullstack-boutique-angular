import { ICustomerDetails, NewCustomerDetails } from './customer-details.model';

export const sampleWithRequiredData: ICustomerDetails = {
  id: 1270,
  gender: 'OTHER',
  phone: '218.941.9733 x17978',
  addressLine1: 'wrongly',
  city: 'Wildermantown',
  country: 'Greece',
};

export const sampleWithPartialData: ICustomerDetails = {
  id: 20278,
  gender: 'OTHER',
  phone: '300-518-7903 x858',
  addressLine1: 'friendship furthermore',
  addressLine2: 'neatly',
  city: 'New Ruthieton',
  country: 'Moldova',
};

export const sampleWithFullData: ICustomerDetails = {
  id: 17817,
  gender: 'OTHER',
  phone: '362.457.8372',
  addressLine1: 'absent overlooked',
  addressLine2: 'unhealthy',
  city: 'Wilmington',
  country: 'Denmark',
};

export const sampleWithNewData: NewCustomerDetails = {
  gender: 'OTHER',
  phone: '462.296.4767 x644',
  addressLine1: 'tabletop whenever',
  city: 'Fort Salvadorfield',
  country: 'Greenland',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
