import { CONTACT_LINKS } from '@/app/_data/contact';
import Image from 'next/image';
import SectionWatcher from '../SectionWatcher';
import EmailCopyButton from './EmailCopyButton';
import { TSectionId } from '@/app/_stores/useActiveSectionIdStore';
import Button from '@/app/_components/Button/Button';

function ContactSection() {
  return (
    <SectionWatcher
      sectionId={TSectionId.CONTACT}
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col gap-7 px-6">
        <div className="flex flex-col items-center gap-3">
          <Image
            width={132}
            height={132}
            src="/image/mail.png"
            alt="메일 아이콘"
            className="animate-bounce"
          />
          <h4 className="text-4xl font-bold">Contact ME</h4>
          <EmailCopyButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {CONTACT_LINKS.map(({ href, text }) => (
            <Button
              key={href}
              href={href}
              aria-label={`${text} - 새 탭에서 열기`}
              rel="noopener noreferrer"
              target="_blank"
              theme="light"
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
