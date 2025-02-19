import { CONTACT_LINKS } from '@/app/_data/contact';
import Image from 'next/image';
import SectionWatcher from '../SectionWatcher';
import ContactButton from './ContactButton';
import EmailCopyButton from './EmailCopyButton';

function ContactSection() {
  return (
    <SectionWatcher
      sectionId="contact"
      className="flex h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col gap-7">
        <div className="flex flex-col items-center gap-4">
          <Image
            width={180}
            height={180}
            src="/image/mail.png"
            alt="메일 아이콘"
            className="animate-bounce"
          />
          <h4 className="text-6xl font-bold">Contact ME</h4>
          <EmailCopyButton />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {CONTACT_LINKS.map(({ href, text }) => (
            <ContactButton key={href} href={href} text={text} />
          ))}
        </div>
      </div>
    </SectionWatcher>
  );
}
export default ContactSection;
