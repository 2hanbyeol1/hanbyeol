'use client';

import Image from 'next/image';

function EmailCopyButton() {
  const EMAIL = '2hanbyeol1@naver.com';

  const handleButtonClick = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        alert('이메일이 클립보드에 복사되었습니다!');
      })
      .catch(() => {
        alert(
          '이메일을 클립보드에 복사하는 중 에러가 발생했습니다. CTRL + C를 사용해주세요.',
        );
      });
  };

  return (
    <button
      className="flex items-center text-3xl text-primary hover:underline"
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
export default EmailCopyButton;
