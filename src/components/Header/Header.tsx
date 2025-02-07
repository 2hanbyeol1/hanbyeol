import HeaderNav from './HeaderNav';
import HeaderProgress from './HeaderProgress';

function Header() {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-screen max-tablet:h-screen max-tablet:w-auto tablet:flex-col">
      <HeaderProgress />
      <HeaderNav />
    </div>
  );
}

export default Header;
