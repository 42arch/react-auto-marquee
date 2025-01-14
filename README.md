# React Auto Marquee

A lightweight and high-performance auto-scrolling (marquee) react component library.

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

### 3. Props

| prop         | type                       | default value |
| ------------ | -------------------------- | ------------- |
| className    | string                     | ''            |
| style        | React.CSSProperties        | {}            |
| speed        | number                     | 0             |
| direction    | 'horizontal' \| 'vertical' | 'vertical'    |
| pauseOnHover | boolean                    | true          |

## Examples

https://react-auto-marquee.vercel.app/
