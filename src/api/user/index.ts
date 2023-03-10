import BaseAPI from '../methods';

type TFilterParams = {};

const {globalCRUD, put, get, post} = new BaseAPI('authenticate');

export const user = {
  ...globalCRUD,
} as const;
