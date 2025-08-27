import { useEffect, useState } from 'react'
import BootSplash from 'react-native-bootsplash'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import MainScreen from './MainScreen'

const App = () => {
  const [mainScreenReady, setMainScreenReady] = useState(false)

  useEffect(() => {
    if (mainScreenReady) {
      BootSplash.hide({ fade: true })
      return
    }

    const timeout = setTimeout(() => {
      BootSplash.hide({ fade: true })
    }, 2000)

    return () => clearTimeout(timeout)
  }, [mainScreenReady])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainScreen onLoaded={() => setMainScreenReady(true)} />
    </SafeAreaView>
  )
}

export default () => (
  <SafeAreaProvider>
    <App />
  </SafeAreaProvider>
)
