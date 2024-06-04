import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 31818,
  name: 'asphyxiate down',
  price: 11082.25,
  productSize: 'L',
};

export const sampleWithPartialData: IProduct = {
  id: 28212,
  name: 'behind police demonize',
  price: 5061.55,
  productSize: 'L',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: IProduct = {
  id: 10724,
  name: 'pepper characterization often',
  description: 'tremendously actual',
  price: 16684.63,
  productSize: 'M',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'for past meh',
  price: 10889.11,
  productSize: 'L',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
