import Button from '@/app/_components/Button/Button';
import { TSectionId } from '@/app/_stores/useActiveSectionIdStore';
import React from 'react';

function ProjectNotFoundPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="text-5xl">🤔</div>
        <div className="text-center">
          <h1 className="desktop:text-2xl mb-2 text-lg font-bold tablet:text-xl">
            프로젝트를 찾을 수 없어요
          </h1>
          <p className="text-center">
            프로젝트 섹션에서 다시 프로젝트를 선택해주세요.
          </p>
        </div>
        <Button className="mt-1" href={`/#${TSectionId.PROJECTS}`}>
          프로젝트 섹션으로 가기
        </Button>
      </div>
    </div>
  );
}

export default ProjectNotFoundPage;
