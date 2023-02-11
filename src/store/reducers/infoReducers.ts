// TYPEs:
interface TPayLoad {
  type: string;
}

interface TActionReducer {}

// MAIN

export const initalState = {
  email: '',
  score: 0,
  address: '',
  id: '', //cmnd
};

export const actionReducer = (state = initalState, payload: TPayLoad) => {};
