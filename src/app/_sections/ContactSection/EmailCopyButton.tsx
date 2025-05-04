'use client';
import useModal from '@/app/_stores/useModal';
import Image from 'next/image';

function EmailCopyButton() {
  const openModal = useModal((state) => state.openModal);
  const EMAIL = '2hanbyeol1@naver.com';

  const handleButtonClick = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        openModal({
          content: <SuccessModalContent />,
          duration: 2,
        });
      })
      .catch(() => {
        openModal({
          content:
            '이메일을 클립보드에 복사하는 중 에러가 발생했습니다. CTRL + C를 사용해주세요.',
          duration: 4,
        });
      });
  };

  return (
    <button
      className="flex items-center text-2xl text-primary hover:underline"
      onClick={handleButtonClick}
      aria-label="이메일 클립보드 복사 버튼"
    >
      <Image
        width={30}
        height={30}
        src="/image/copy.png"
        alt="복사 아이콘"
        className="mr-2"
      />
      {EMAIL}
    </button>
  );
}

function SuccessModalContent() {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="animate-scaleUp flex h-10 w-10 items-center justify-center rounded-full bg-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          className="p-1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M5 13l4 4L19 7"
            className="animate-check"
          />
        </svg>
      </div>
      <p className="text-xl">
        이메일이 <span className="text-bold">클립보드에 복사</span>
        되었습니다!
      </p>
    </div>
  );
}
export default EmailCopyButton;
