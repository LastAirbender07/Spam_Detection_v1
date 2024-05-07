import { Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import GetMsg from './GetMsg';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-col gap-1 bg-[#333]">
      <View className="flex flex-row gap-5 p-2 items-center justify-between bg-[#444]">
        <Text className="text-[25px] font-semibold text-slate-200">Spam Detection</Text>
        <TouchableOpacity 
          className="w-[60px] h-[60px] bg-black rounded-full justify-center items-center"
          onPress={() => navigation.navigate("Question")}>
          <Image 
            source={require('../assets/ai.png')}
            style={{ width:50, height:50, borderRadius:25, resizeMode:'cover' }}/>
        </TouchableOpacity>

      </View>
      <GetMsg />
    </SafeAreaView>
  )
}

export default Home