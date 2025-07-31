import { MAIN_PATH } from '@/constants/path';

import Button from '../components/Button/Button';

function GlobalNotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="text-5xl">🤔</div>
        <div className="text-center">
          <h1 className="mb-2 text-xl font-bold tablet:text-2xl">
            페이지를 찾을 수 없어요
          </h1>
          <p className="text-center">페이지 주소를 다시 확인해주세요.</p>
        </div>
        <Button className="mt-1" href={MAIN_PATH()}>
          홈으로 가기
        </Button>
      </div>
    </div>
  );
}

export default GlobalNotFoundPage;
