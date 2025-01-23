import { SECTION_ID } from '@/constants/section';
import { create } from 'zustand';

interface TActiveSectionIdStore {
  activeSectionId: string;
  setActiveIndex: (newActiveIndex: string) => void;
}

const useActiveIndexStore = create<TActiveSectionIdStore>((set) => ({
  activeSectionId: SECTION_ID.intro,
  setActiveIndex: (newActiveSectionId) =>
    set({ activeSectionId: newActiveSectionId }),
}));

export default useActiveIndexStore;
