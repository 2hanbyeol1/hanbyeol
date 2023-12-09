const headerItems = ['About', 'Skills', 'Projects', 'Career']

export default function Header() {
  return (
    <header className="bg-black fixed top-0 flex justify-between items-center w-screen px-5 h-14 border-b border-gray-300">
      <span className="text-xl font-semibold">HanbyeoL⭐</span>
      <ul className="flex">
        {headerItems.map((item) => {
          return (
            <li key={item} className="ml-5">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
