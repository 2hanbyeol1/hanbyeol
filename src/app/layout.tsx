import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: '이한별 | FE 개발자',
  description:
    'FE 개발자 이한별의 소개, 기술, 경험, 프로젝트를 확인할 수 있는 포트폴리오입니다.',
};

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
