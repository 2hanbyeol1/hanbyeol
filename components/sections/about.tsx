import React from 'react';
import MyImage from '../about/myImage';
import LogoButton from '../about/logoButton';
import Contact from '../about/contact';

import GitHub from '../../public/image/icon/github.svg';
import Blog from '../../public/image/icon/blog.png';
import Instagram from '../../public/image/icon/instagram.svg';
import Velog from '../../public/image/icon/velog.png';
import Title from '../common/title';

const infos = [
  '🐹 Hanbyeol Lee',
  '🎂 2001-12-30',
  '✏️ 명지대학교, 융합소프트웨어학부',
];

const links = [
  { img: GitHub, href: 'https://github.com/2hanbyeol1', name: 'github' },
  { img: Blog, href: 'https://blog.naver.com/2hanbyeol1', name: 'naver blog' },
  { img: Velog, href: 'https://velog.io/@2hanbyeol1', name: 'velog' },
  {
    img: Instagram,
    href: 'https://www.instagram.com/1nstargram_/',
    name: 'instagram',
  },
];

export default function About() {
  return (
    <>
      <div className="flex flex-col mb-1 sm:mb-5 px-5 sm:px-10 py-5 sm:py-7 bg-white rounded-2xl">
        <Title title="About me" />
        <div className="text-lg mb-1 sm:mb-3">
          안녕하세요! ~~~ 개발자,&nbsp;
          <span className="font-semibold">이한별</span>입니다 :)
        </div>
        <div className="flex max-sm:flex-col">
          <div className="flex justify-center items-center mb-1 sm:mb-0 sm:pr-10 sm:border-r sm:border-gray-300">
            <MyImage />
          </div>
          <div className="flex flex-col justify-between sm:pl-10">
            <div className="max-sm:mb-2">
              {infos.map((info, i) => {
                return (
                  <div key={`info-${i}`} className="text-md sm:text-lg w-fit">
                    {info}
                  </div>
                );
              })}
              <div id="email" className="text-md sm:text-lg w-fit">
                📧 2hanbyeol1@naver.com
              </div>
            </div>
            <div className="flex max-sm:justify-center">
              {links.map((link, i) => {
                return (
                  <LogoButton
                    key={`link-${i}`}
                    href={link.href}
                    image={link.img}
                    name={link.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}
