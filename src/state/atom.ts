import { atom } from 'recoil';

export const editPropertyState = atom<boolean>({
    key: 'isEditPropertyState',
    default: false,
  });