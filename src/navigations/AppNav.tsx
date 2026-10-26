import { NavigationContainer } from '@react-navigation/native'
import TabNav from './TabNav'
import AuthNav from './AuthNav'

export default function AppNav() {
    const user = true
  return (
    <NavigationContainer>
      {user ? <TabNav /> : <AuthNav />}
    </NavigationContainer>
  )
}