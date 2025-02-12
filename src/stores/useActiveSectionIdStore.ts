import { create } from 'zustand';

export type TSectionId =
  | 'intro'
  | 'skills'
  | 'experiences'
  | 'projects'
  | 'contact';

interface TActiveSectionIdStore {
  activeSectionId: TSectionId;
  activate: (sectionId: TSectionId) => void;
  deactivate: (sectionId: TSectionId) => void;
}

const activeSections = new Set<TSectionId>();

const useActiveIndexStore = create<TActiveSectionIdStore>((set) => ({
  activeSectionId: 'intro',
  activate: (sectionId) => {
    activeSections.add(sectionId);
    set({ activeSectionId: sectionId });
  },
  deactivate: (sectionId) => {
    activeSections.delete(sectionId);
    set({ activeSectionId: [...activeSections.values()][0] });
  },
}));

export default useActiveIndexStore;
