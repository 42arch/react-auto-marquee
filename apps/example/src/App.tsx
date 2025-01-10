import Marquee from 'react-auto-marquee'

function App() {
  const list = Array.from({ length: 2 }, (_, index) => index)

  return (
    <div
      style={{
        width: '200px',
        height: '300px',
        background: 'gray'
      }}
    >
      <Marquee
        style={{
          width: '100%',
          height: '100%'
        }}
        direction='vertical'
        speed={10}
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

export default App
