export default function Header({ headerItems }: { headerItems: string[] }) {
  return (
    <header className="flex max-sm:flex-col justify-center items-center w-screen h-20 px-5 bg-black border-b border-gray-300 fixed top-0 z-50 sm:justify-between sm:h-14">
      <span className="max-sm:mb-2 text-xl font-semibold">HanbyeoL⭐</span>
      <ul className="flex">
        {headerItems.map((item) => {
          return (
            <li key={item} className="max-sm:mx-2 sm:ml-5">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
