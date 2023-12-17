import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-3 2xl:px-80 xl:px-64 lg:px-32">{children}</div>
}
