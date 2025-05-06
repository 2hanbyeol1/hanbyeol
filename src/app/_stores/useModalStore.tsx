import { ReactNode } from 'react';
import { create } from 'zustand';

interface TModalOptions {
  title?: string | ReactNode;
  content: string | ReactNode;
  duration?: number;
}

interface TModalStore {
  modalOptions: TModalOptions | null;
  openModal: (modalOption: TModalOptions) => void;
  closeModal: () => void;
}

const useModalStore = create<TModalStore>((set) => ({
  modalOptions: null,
  openModal: (modalOption) => {
    set({ modalOptions: modalOption });
  },
  closeModal: () => {
    set({ modalOptions: null });
  },
}));

export default useModalStore;
