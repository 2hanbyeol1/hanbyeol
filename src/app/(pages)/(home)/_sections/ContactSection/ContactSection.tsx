import Button from '@/components/Button/Button';
import { CONTACT_LINKS } from '@/data/contact';
import { TSectionId } from '@/stores/useActiveSectionIdStore';

import SectionWatcher from '../SectionWatcher';

import EmailCopyButton from './EmailCopyButton';

function ContactSection() {
  return (
    <SectionWatcher
      sectionId={TSectionId.CONTACT}
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col items-center gap-5 px-6">
        <div className="flex flex-col items-center gap-3">
          <h4 className="text-3xl font-bold">끝까지 읽어주셔서 감사합니다</h4>
          <div className="mb-1 text-lg">
            궁금한 점이 있으실 경우, 편하게 연락 부탁드립니다
          </div>
        </div>

        <EmailCopyButton />

        <div className="grid grid-cols-2 gap-1.5 tablet:grid-cols-4">
          {CONTACT_LINKS.map(({ href, text }) => (
            <Button
              key={href}
              href={href}
              aria-label={`${text} - 새 탭에서 열기`}
              rel="noopener noreferrer"
              target="_blank"
              theme="light"
              className="text-sm transition-transform duration-100 hover:-translate-y-1 desktop:text-base"
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
    </SectionWatcher>
  );
}
export default ContactSection;
