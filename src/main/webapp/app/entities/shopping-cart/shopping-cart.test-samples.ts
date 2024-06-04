import dayjs from 'dayjs/esm';

import { IShoppingCart, NewShoppingCart } from './shopping-cart.model';

export const sampleWithRequiredData: IShoppingCart = {
  id: 8348,
  placedDate: dayjs('2024-06-04T10:19'),
  status: 'CANCELLED',
  totalPrice: 28564.64,
  paymentMethod: 'IDEAL',
};

export const sampleWithPartialData: IShoppingCart = {
  id: 12089,
  placedDate: dayjs('2024-06-03T23:40'),
  status: 'CANCELLED',
  totalPrice: 28908.83,
  paymentMethod: 'IDEAL',
};

export const sampleWithFullData: IShoppingCart = {
  id: 1461,
  placedDate: dayjs('2024-06-04T08:54'),
  status: 'PAID',
  totalPrice: 8495.37,
  paymentMethod: 'IDEAL',
  paymentReference: 'upend initiative to',
};

export const sampleWithNewData: NewShoppingCart = {
  placedDate: dayjs('2024-06-03T18:54'),
  status: 'CANCELLED',
  totalPrice: 1868.96,
  paymentMethod: 'CREDIT_CARD',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
