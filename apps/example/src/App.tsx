import AutoMarquee from 'react-auto-marquee'
import { useControls } from 'leva'
import './App.css'

const lorem = 'Lorem ipsum dolor sit amet'

function App() {
  const {
    itemNumber: vlNumber,
    speed: vlSpeed,
    pauseOnHover: vlHover
  } = useControls('Vertical List', {
    itemNumber: {
      value: 10,
      min: 1,
      max: 50,
      step: 1
    },
    speed: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10
    },
    pauseOnHover: true
  })

  const {
    itemNumber: hlNumber,
    speed: hlSpeed,
    pauseOnHover: hlHover
  } = useControls('Horizontal List', {
    itemNumber: {
      value: 10,
      min: 1,
      max: 50,
      step: 1
    },
    speed: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10
    },
    pauseOnHover: true
  })

  const {
    textNumber: vtNumber,
    speed: vtSpeed,
    pauseOnHover: vtHover
  } = useControls('Vertical Text', {
    textNumber: {
      value: 10,
      min: 1,
      max: 20,
      step: 1
    },
    speed: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10
    },
    pauseOnHover: true
  })

  const {
    textNumber: htNumber,
    speed: htSpeed,
    pauseOnHover: htHover
  } = useControls('Horizontal Text', {
    textNumber: {
      value: 10,
      min: 1,
      max: 20,
      step: 1
    },
    speed: {
      value: 1,
      step: 0.1,
      min: 0,
      max: 10
    },
    pauseOnHover: true
  })

  return (
    <div className='app'>
      <h1>React-Auto-Marque Examples</h1>
      <br />

      <h2>Vertical List</h2>
      <AutoMarquee
        className='list list-1'
        style={{}}
        direction='vertical'
        speed={vlSpeed}
        pauseOnHover={vlHover}
      >
        {Array.from({ length: vlNumber }).map((_, idx) => (
          <div key={idx} className='list-item list-item-1'>
            item - {idx}
          </div>
        ))}
      </AutoMarquee>

      <br />

      <h2>Horizontal List</h2>
      <AutoMarquee
        className='list list-2'
        direction='horizontal'
        speed={hlSpeed}
        pauseOnHover={hlHover}
      >
        {Array.from({ length: hlNumber }).map((_, idx) => (
          <div key={idx} className='list-item list-item-2'>
            item - {idx}
          </div>
        ))}
      </AutoMarquee>

      <br />

      <h2>Vertical Text</h2>

      <AutoMarquee
        className='text text-1'
        direction='vertical'
        speed={vtSpeed}
        pauseOnHover={vtHover}
      >
        {Array.from({ length: vtNumber }).join(lorem)}
      </AutoMarquee>

      <br />

      <h2>Horizontal Text</h2>

      <AutoMarquee
        className='text text-2'
        direction='horizontal'
        speed={htSpeed}
        pauseOnHover={htHover}
      >
        {Array.from({ length: htNumber }).join(lorem)}
      </AutoMarquee>
    </div>
  )
}

export default App
