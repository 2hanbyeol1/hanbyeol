import { ReactNode } from 'react';
import { create } from 'zustand';

interface TModalOptions {
  title?: string | ReactNode;
  content: string | ReactNode;
  duration?: number;
}

interface TModalStore {
  modalOptions: TModalOptions | null;
  openModal: (modalOptions: TModalOptions) => void;
  closeModal: () => void;
}

const useModalStore = create<TModalStore>((set) => ({
  modalOptions: null,
  openModal: (modalOptions) => {
    set({ modalOptions });
  },
  closeModal: () => {
    set({ modalOptions: null });
  },
}));

export default useModalStore;
