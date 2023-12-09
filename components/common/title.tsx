export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-3xl font-bold pb-2 mb-2 border-b border-gray-500">
      # {title}
    </h1>
  )
}
