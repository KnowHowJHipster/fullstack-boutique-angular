import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 20280,
  quantity: 19483,
  totalPrice: 4050.38,
};

export const sampleWithPartialData: IProductOrder = {
  id: 15844,
  quantity: 8671,
  totalPrice: 11599.27,
};

export const sampleWithFullData: IProductOrder = {
  id: 1216,
  quantity: 28625,
  totalPrice: 2871.48,
};

export const sampleWithNewData: NewProductOrder = {
  quantity: 30403,
  totalPrice: 19609.89,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
