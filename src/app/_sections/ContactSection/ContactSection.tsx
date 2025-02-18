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
          <ContactButton href="/file/resume.pdf" text="Resume" />
          <ContactButton
            href="https://www.linkedin.com/in/%ED%95%9C%EB%B3%84-%EC%9D%B4-07362b2a6/"
            text="Linked In"
          />
          <ContactButton href="https://github.com/2hanbyeol1" text="Github" />
          <ContactButton href="https://velog.io/@2hanbyeol1" text="Velog" />
        </div>
      </div>
    </SectionWatcher>
  );
}
export default ContactSection;
