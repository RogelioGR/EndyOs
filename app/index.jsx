import { useRouter } from 'expo-router'
import { Text } from 'react-native'
import React from 'react'

import ScreenWrapper from '../components/ScreenWrapper';
import Button from '../components/Buttons'

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="dark" >
      <Text>index</Text>
      <Button title='welcome' onPress={()=> router.push('welcome')}/>
   

    </ScreenWrapper>
  )
}

export default index