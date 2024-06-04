import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 7048,
  name: 'duplexer hearthside',
};

export const sampleWithPartialData: IProductCategory = {
  id: 20635,
  name: 'lest loneliness',
  description: 'aha devastation ugh',
};

export const sampleWithFullData: IProductCategory = {
  id: 6824,
  name: 'the',
  description: 'tensely eek glittering',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'hotdog unto',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
