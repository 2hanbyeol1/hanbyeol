'use client';
import React, { MouseEventHandler, useState } from 'react';
import { SkillType } from '../../constants/type';
import Modal from '../common/modal';

export default function Skill({ skill }: { skill: SkillType }) {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal: MouseEventHandler = (e) => {
    setModal(false);
  };

  const modalContents = [];

  for (const content of skill.contents) {
    modalContents.push(
      <li key={content} className="mr-9 text-sm sm:text-base">
        {content}
      </li>
    );
  }

  return (
    <>
      <Modal
        title={skill.name}
        content={modalContents}
        isOpen={modal}
        onClose={closeModal}
      />
      <div className="flex flex-wrap mr-3 mb-5" onClick={openModal}>
        <div className="inline-block p-3 border border-white rounded-lg hover:bg-gray-800">
          {skill.name}
        </div>
      </div>
    </>
  );
}
