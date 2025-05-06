'use client';
import useModalStore from '@/app/_stores/useModalStore';
import { motion } from 'motion/react';
import { useEffect } from 'react';

function Modal() {
  const modalOption = useModalStore((state) => state.modalOptions);
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    if (!modalOption || !modalOption?.duration) return;
    const timeoutId = setTimeout(() => {
      closeModal();
    }, modalOption.duration * 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  if (modalOption === null) return <></>;
  const { title, content: message } = modalOption;

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/10 backdrop-blur-md"
      onClick={closeModal}
    >
      <motion.div
        className="max-h-full max-w-full rounded-3xl bg-white p-10"
        initial={{ translateY: 20, opacity: 0, scale: 0.8 }}
        animate={{ translateY: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>{title}</div>
        <div>{message}</div>
      </motion.div>
    </div>
  );
}
export default Modal;
