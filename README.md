# React Auto Marquee

## Quick Start

### 1. Installation

```sh
npm install react-auto-marquee
```

### 2. Usage

```tsx
import AutoMarquee from 'react-auto-marquee'

function App() {
  return (
    <div>
      <AutoMarquee
        style={{
          width: '200px',
          height: '300px'
        }}
        direction='vertical'
        speed={0.3}
        pauseOnHover={true}
      >
        {list.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid red',
              background: 'cyan',
              margin: '6px 0'
            }}
          >
            item - {item}
          </div>
        ))}
      </AutoMarquee>
    </div>
  )
}
```

## Props

| prop         | type                       | defaultValue |
| ------------ | -------------------------- | ------------ |
| className    | string                     | ''           |
| style        | React.CSSProperties        | {}           |
| speed        | number                     | 0            |
| direction    | 'horizontal' \| 'vertical' | 'vertical'   |
| pauseOnHover | boolean                    | true         |
