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
          <div className="desktop:h-32 desktop:w-32 relative h-24 w-24 animate-bounce tablet:h-28 tablet:w-28">
            <Image src="/image/mail.png" alt="메일 아이콘" fill sizes="8rem" />
          </div>
          <h4 className="desktop:text-4xl text-2xl font-bold tablet:text-3xl">
            Contact ME
          </h4>
          <EmailCopyButton />
        </div>
        <div className="grid grid-cols-2 gap-2 tablet:grid-cols-4 tablet:gap-4">
          {CONTACT_LINKS.map(({ href, text }) => (
            <Button
              key={href}
              href={href}
              aria-label={`${text} - 새 탭에서 열기`}
              rel="noopener noreferrer"
              target="_blank"
              theme="light"
              className="desktop:text-base text-sm"
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
