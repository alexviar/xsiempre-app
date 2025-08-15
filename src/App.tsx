import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import MainScreen from './MainScrean'
import SplashVideo from './SplashVideo'

const App = () => {
  const [mainScreenReady, setMainScreenReady] = useState(false)
  const [splashTimeoutDone, setSplashTimeoutDone] = useState(false)
  const [splashVideoEnded, setSplashVideoEnded] = useState(false)

  const shouldShowSplash = !splashVideoEnded && (!mainScreenReady || !splashTimeoutDone)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreen onLoaded={() => setMainScreenReady(true)} />
      {shouldShowSplash && <SplashVideo
        onMinimumSplashTimeReached={() => setSplashTimeoutDone(true)}
        onVideoEnd={() => setSplashVideoEnded(true)}
      />}
    </SafeAreaView>
  )
}

export default App
