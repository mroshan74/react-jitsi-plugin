import './App.css';
import { useJitsi } from 'react-jutsu'
import React, { useEffect, useState } from 'react'

const JitsiInvoke = ({jitsiConfig}) => {
  console.log(jitsiConfig)
  const { loading, error, jitsi } = useJitsi(jitsiConfig)
  return( 
    <React.Fragment>
      {error && <p>{error}</p>}
      <div id={jitsiConfig.parentNode} />
    </React.Fragment>
)}

const App = ({config}) => {
  const [ defaults, setDefaults ] = useState({})
  useEffect(() => {
    console.log(config)
    let presets = { 
      parentNode: 'jitsi-container',
      ...config,
    }
    setDefaults(presets)
  },[])
  console.log(defaults, '>>> Defaults')
  if(defaults.roomName && defaults.userId.email)
  return <JitsiInvoke jitsiConfig={defaults} />
  else return null
}
export default App
