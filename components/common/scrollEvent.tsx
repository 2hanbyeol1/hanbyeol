'use client'
import { useEffect } from 'react'

export default function ScrollEvent() {
  const scrollUpByViewportHeight = () => {
    const viewportHeight = window.innerHeight
    const currentPosition = window.scrollY

    if (currentPosition >= viewportHeight) {
      window.scrollTo({
        top: currentPosition - viewportHeight,
      })
    } else {
      // 이미 제일 위에 있으면
      window.scrollTo({
        top: 0,
      })
    }
  }

  const scrollDownByViewportHeight = () => {
    const viewportHeight = window.innerHeight
    const currentPosition = window.scrollY
    const documentHeight = document.body.scrollHeight

    if (currentPosition + viewportHeight < documentHeight) {
      window.scrollTo({
        top: currentPosition + viewportHeight,
      })
    } else {
      // 이미 제일 아래에 있으면
      window.scrollTo({
        top: documentHeight,
      })
    }
  }

  useEffect(() => {
    let canTriggerScroll = true

    const handleWheel = (e: WheelEvent) => {
      if (!canTriggerScroll) return

      canTriggerScroll = false
      if (e.deltaY < 0) scrollUpByViewportHeight()
      else scrollDownByViewportHeight()

      setTimeout(function () {
        canTriggerScroll = true
      }, 1100) // 1초 대기
    }

    // mobile
    let startTouchY: number

    const handleTouchStart = (e: TouchEvent) => {
      if (!canTriggerScroll) return
      startTouchY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!canTriggerScroll) return

      const endTouchY = e.changedTouches[0].clientY
      const deltaY = startTouchY - endTouchY

      if (Math.abs(deltaY) <= 20) return // delta 값이 작은 경우

      canTriggerScroll = false
      if (deltaY < 0) scrollUpByViewportHeight()
      else scrollDownByViewportHeight()

      setTimeout(function () {
        canTriggerScroll = true
      }, 1000) // 1초 대기
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return <></>
}
