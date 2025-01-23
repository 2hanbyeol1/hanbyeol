import ProgressBar from '../atoms/ProgressBar';
import NavBar from '../molecules/NavBar';

function Header() {
  return (
    <div className="fixed left-0 top-0 flex w-screen max-tablet:h-screen max-tablet:w-auto tablet:flex-col">
      <ProgressBar />
      <NavBar />
    </div>
  );
}

export default Header;
