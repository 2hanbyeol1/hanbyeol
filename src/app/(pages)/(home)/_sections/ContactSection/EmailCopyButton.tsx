'use client';
import Image from 'next/image';

import useModalStore from '@/stores/useModalStore';

function EmailCopyButton() {
  const openModal = useModalStore((state) => state.openModal);
  const EMAIL = '2hanbyeol1@naver.com';

  const handleButtonClick = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        openModal({
          title: '🎉',
          content: (
            <>
              이메일이 <span className="font-medium">클립보드에 복사</span>
              되었습니다!
            </>
          ),
          duration: 2500,
        });
      })
      .catch(() => {
        openModal({
          title: '😭',
          content: (
            <>
              이메일을 클립보드에 복사하는 중<br />
              <span className="font-semibold">에러가 발생</span>
              했습니다!
            </>
          ),
          duration: 4000,
        });
      });
  };

  return (
    <button
      className="flex items-center gap-2 text-lg text-primary hover:underline"
      onClick={handleButtonClick}
      aria-label="이메일 클립보드 복사 버튼"
    >
      <div className="relative aspect-square w-5 desktop:w-6">
        <Image src="/image/copy.png" alt="복사 아이콘" fill sizes="1.5rem" />
      </div>
      {EMAIL}
    </button>
  );
}

export default EmailCopyButton;
