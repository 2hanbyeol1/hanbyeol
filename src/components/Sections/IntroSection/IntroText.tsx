function IntroText() {
  return (
    <h1 className="text-center text-3xl font-semibold foldable:text-3xl tablet:text-end tablet:text-4xl [&>p]:leading-snug">
      <p>반갑습니다!</p>
      <p className="text-primary">
        <span className="inline-block font-bold text-primary">
          누구나 사용하기 쉬운
        </span>
        <span className="inline-block">
          <span className="font-bold text-primary">&nbsp;화면을 개발</span>
          하는
        </span>
      </p>
      <p>
        <span className="inline-block">프론트엔드 개발자</span>&nbsp;
        <span className="inline-block">
          <strong className="font-bold">이한별</strong>
          입니다.
        </span>
      </p>
    </h1>
  );
}

export default IntroText;
