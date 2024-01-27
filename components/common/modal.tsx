import { MouseEventHandler } from 'react';

export default function Modal({
  title,
  content,
  isOpen,
  onClose,
}: {
  title: string;
  content: any[];
  isOpen: boolean;
  onClose: MouseEventHandler;
}) {
  return (
    <>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed top-0 left-0 w-full h-full bg-[#00000080] z-20`}
        onClick={onClose}
      ></div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-10/12 md:w-[40rem] p-5 rounded text-black bg-white cursor-pointer z-30`}
      >
        <div className="mb-3 flex justify-between">
          <h3 className="font-bold">{title}</h3>
          <div onClick={onClose}>❌</div>
        </div>
        {content}
      </div>
    </>
  );
}
