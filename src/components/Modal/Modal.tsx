'use client';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import useModalStore from '@/stores/useModalStore';

function Modal() {
  const modalOption = useModalStore((state) => state.modalOptions);
  const closeModal = useModalStore((state) => state.closeModal);

  useEffect(() => {
    if (!modalOption || !modalOption?.duration) return;
    const timeoutId = setTimeout(() => {
      closeModal();
    }, modalOption.duration);

    return () => {
      clearTimeout(timeoutId);
    };
  });

  const { title, content: message } = modalOption ?? {};

  return (
    <AnimatePresence>
      {modalOption && (
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/10 backdrop-blur-md"
          onClick={closeModal}
        >
          <motion.div
            className="max-h-full max-w-full rounded-3xl bg-white p-10"
            initial={{ translateY: 20, opacity: 0, scale: 0.8 }}
            animate={{ translateY: 0, opacity: 1, scale: 1 }}
            exit={{ translateY: 20, opacity: 0, scale: 0.8 }}
          >
            <div className="mb-2.5 text-center text-2xl font-medium">
              {title}
            </div>
            <div className="text-center text-base">{message}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default Modal;
