import { create } from 'zustand';

export enum TSectionId {
  INTRO = 'intro',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}

interface TActiveSectionIdStore {
  activeSectionId: TSectionId;
  activate: (sectionId: TSectionId) => void;
  deactivate: (sectionId: TSectionId) => void;
}

const activeSections = new Set<TSectionId>();

const useActiveIndexStore = create<TActiveSectionIdStore>((set) => ({
  activeSectionId: TSectionId.INTRO,
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
