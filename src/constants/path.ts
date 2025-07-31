import { TProject } from '@/data/project';
import { TSectionId } from '@/stores/useActiveSectionIdStore';

export const MAIN_PATH = ({ sectionId }: { sectionId?: TSectionId } = {}) =>
  `/${sectionId ? `#${sectionId}` : ''}`;

export const PROJECT_DETAIL_PATH = ({
  projectId,
}: {
  projectId: TProject['id'];
}) => `/project/${projectId}`;
