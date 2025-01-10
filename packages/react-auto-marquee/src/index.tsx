import React, { useEffect, useRef, useState } from 'react'
import './index.css'

interface AutoMarqueeProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  speed?: number
  direction?: 'vertical' | 'horizontal'
  pauseOnHover?: boolean
}

const AutoMarquee: React.FC<AutoMarqueeProps> = ({
  children,
  className = '',
  style = {},
  speed = 1,
  direction = 'vertical',
  pauseOnHover = true
}) => {
  const [needsScroll, setNeedsScroll] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current?.children[0]

    if (!container || !content) return

    const checkScroll = () => {
      const needsToScroll =
        direction === 'vertical'
          ? content.clientHeight > container.clientHeight
          : content.clientWidth > container.clientWidth

      setNeedsScroll(needsToScroll)

      if (needsToScroll) {
        const duration =
          direction === 'vertical'
            ? (content.clientHeight / speed) * 20
            : (content.clientWidth / speed) * 20

        container.style.setProperty('--scroll-duration', `${duration}ms`)
      }
    }

    checkScroll()

    const resizeObserver = new ResizeObserver(checkScroll)
    resizeObserver.observe(container)
    resizeObserver.observe(content)

    return () => {
      resizeObserver.disconnect()
    }
  }, [children, direction, speed])

  const contentClass =
    `auto-marquee-content ${direction} ${needsScroll ? 'scrolling' : ''} ${pauseOnHover ? 'pause-on-hover' : ''}`.trim()

  return (
    <div
      className={`auto-marquee-container ${className}`}
      style={style}
      ref={containerRef}
    >
      <div className={contentClass} ref={contentRef}>
        <div className='auto-marquee-scroll-item'>{children}</div>
        {needsScroll && (
          <div className='auto-marquee-scroll-item'>{children}</div>
        )}
      </div>
    </div>
  )
}

export { AutoMarqueeProps }
export default AutoMarquee
