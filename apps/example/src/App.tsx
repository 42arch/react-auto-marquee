import Marquee from 'react-auto-marquee'

function App() {
  const list = Array.from({ length: 10 }, (_, index) => index)

  return (
    <div
      style={{
        background: 'gray'
      }}
    >
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

      <br />

      <Marquee
        style={{
          width: '300px',
          height: '40px'
        }}
        direction='horizontal'
        speed={3}
        pauseOnHover={false}
      >
        {list.map((item, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid red',
              background: 'cyan',
              margin: '0 6px'
            }}
          >
            item - {item}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default App
