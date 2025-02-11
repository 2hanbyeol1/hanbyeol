import { create } from 'zustand';

export type TSectionId =
  | 'intro'
  | 'skills'
  | 'experiences'
  | 'projects'
  | 'contact';

interface TActiveSectionIdStore {
  activeSectionId: TSectionId;
  setActiveIndex: (newActiveSectionId: TSectionId) => void;
}

const useActiveIndexStore = create<TActiveSectionIdStore>((set) => ({
  activeSectionId: 'intro',
  setActiveIndex: (newActiveSectionId) =>
    set({ activeSectionId: newActiveSectionId }),
}));

export default useActiveIndexStore;
