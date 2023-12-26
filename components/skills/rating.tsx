import { useEffect } from 'react'

export default function Rating({ id, rate }: { id: string; rate: number }) {
  useEffect(() => {
    const barElement = document.querySelector(`#${id}`) as HTMLElement
    if (barElement) barElement.style.width = `${(rate / 100) * 5}rem` // 100% is 5rem
  }, [])

  return (
    <div className="mt-1 w-20 h-3 border border-black rounded">
      <div id={id} className="px-1 h-3 bg-black text-white rounded"></div>
    </div>
  )
}
