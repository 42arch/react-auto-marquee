import React, { useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface AutoMarqueeProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  speed?: number
  direction?: 'vertical' | 'horizontal'
  pauseOnHover?: boolean
}

const scrollVertical = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`

const scrollHorizontal = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const Container = styled.div`
  overflow: hidden;
  --scroll-duration: 10000ms;
`

const Content = styled.div<{
  $direction: 'vertical' | 'horizontal'
  $isScrolling: boolean
  $pauseOnHover: boolean
  $duration: number
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.$direction === 'vertical' ? 'column' : 'row'};
  align-items: ${(props) =>
    props.$direction === 'horizontal' ? 'center' : 'stretch'};

  ${(props) =>
    props.$isScrolling &&
    css`
      animation: ${props.$direction === 'vertical'
          ? scrollVertical
          : scrollHorizontal}
        ${props.$duration}ms linear infinite;

      ${props.$pauseOnHover &&
      css`
        &:hover {
          animation-play-state: paused;
        }
      `}
    `}
`

const ScrollItem = styled.div<{
  $direction?: 'vertical' | 'horizontal'
}>`
  flex-shrink: 0;
  display: flex;
  flex-direction: ${(props) =>
    props.$direction === 'vertical' ? 'column' : 'row'};
  align-items: ${(props) =>
    props.$direction === 'vertical' ? 'stretch' : 'center'};
`

const AutoMarquee: React.FC<AutoMarqueeProps> = ({
  children,
  className = '',
  style = {},
  speed = 1,
  direction = 'vertical',
  pauseOnHover = true
}) => {
  const [needsScroll, setNeedsScroll] = useState(false)
  const [duration, setDuration] = useState(10000)
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
        const newDuration =
          direction === 'vertical'
            ? (content.clientHeight / speed) * 20
            : (content.clientWidth / speed) * 20

        setDuration(newDuration)
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

  return (
    <Container ref={containerRef} className={className} style={style}>
      <Content
        ref={contentRef}
        $direction={direction}
        $isScrolling={needsScroll}
        $pauseOnHover={pauseOnHover}
        $duration={duration}
      >
        <ScrollItem $direction={direction}>{children}</ScrollItem>
        {needsScroll && (
          <ScrollItem $direction={direction}>{children}</ScrollItem>
        )}
      </Content>
    </Container>
  )
}

export default AutoMarquee
