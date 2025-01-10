# React Auto Marquee

## Getting start

```sh
npm install react-auto-marquee
```

## How to use

```tsx
import AutoMarquee from 'react-auto-marquee'

function App() {
  return (
    <div>
      <Marquee
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
      </Marquee>
    </div>
  )
}
```

### Apps and Packages
