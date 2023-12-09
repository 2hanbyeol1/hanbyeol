import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mt-14 py-10 px-10">{children}</div>
}
