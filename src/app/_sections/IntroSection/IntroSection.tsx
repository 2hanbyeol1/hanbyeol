import SectionWatcher from '../SectionWatcher';
import IntroText from './IntroText';

function IntroSection() {
  return (
    <SectionWatcher
      sectionId="intro"
      className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-primary4 via-primary4 via-70% to-primary4/0"
    >
      <div className="mx-8 flex w-full max-w-[52rem] items-center justify-between max-tablet:flex-col max-tablet:gap-8">
        <div className="origin-bottom-right animate-wiggle text-9xl">👋</div>
        <IntroText />
      </div>
    </SectionWatcher>
  );
}
export default IntroSection;
