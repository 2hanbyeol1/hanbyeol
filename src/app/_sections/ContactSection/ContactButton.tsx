import Link from 'next/link';

function ContactButton({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="border border-primary/10 rounded-md bg-primary/5 px-4 py-2.5 text-center text-dark shadow-sm hover:bg-primary/10"
      aria-label={`${text} - 새 탭에서 열기`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
}

export default ContactButton;
