import { ReactNode } from 'react';
import { create } from 'zustand';

interface TModalOptions {
  title?: string;
  content: string | ReactNode;
  duration?: number;
}

interface TModalStore {
  modalOptions: TModalOptions | null;
  openModal: (modalOption: TModalOptions) => void;
  closeModal: () => void;
}

const useModal = create<TModalStore>((set) => ({
  modalOptions: null,
  openModal: (modalOption) => {
    set({ modalOptions: modalOption });
  },
  closeModal: () => {
    set({ modalOptions: null });
  },
}));

export default useModal;
