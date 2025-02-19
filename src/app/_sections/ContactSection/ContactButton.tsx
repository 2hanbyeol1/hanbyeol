import Link from 'next/link';

function ContactButton({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="rounded-md bg-primary/20 px-5 py-3 text-center text-dark shadow-md hover:bg-primary/30"
      aria-label={`${text} - 새 탭에서 열기`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
}

export default ContactButton;
