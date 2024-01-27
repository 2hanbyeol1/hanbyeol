import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-96 border-b border-gray-300 pb-3 text-xl text-center font-semibold">
          HanbyeoL⭐
        </div>
        <div className="py-3">페이지를 찾을 수 없습니다.</div>
        <Link className="bg-white text-black px-3 py-1 rounded" href="/">
          포트폴리오 보러가기
        </Link>
      </div>
    </div>
  );
}
