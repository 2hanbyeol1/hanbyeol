import { TSectionId } from '@/stores/useActiveSectionIdStore';

export const MAIN_PATH = ({ sectionId }: { sectionId?: TSectionId } = {}) =>
  `/${sectionId ? `#${sectionId}` : ''}`;
