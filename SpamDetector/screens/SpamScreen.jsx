import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SpamScreen = ({ filteredMsg }) => {
  return (
    <View className="pt-2 pb-[25%] px-2 bg-[#333]">
        <ScrollView className="w-full h-full p-1 bg-[#333]">
            {filteredMsg.map((message, index) => (
                <View key={index}  className={`p-1 ${index === 0 ? 'mt-1' : 'mt-5'}`}>
                    <TouchableOpacity 
                        className="flex-row items-center gap-5 p-1 rounded-xl">
                        <Image 
                            source={require('../assets/user.png')}
                            style={{ width:50, height:50, borderRadius:25, resizeMode:'cover' }}/>

                        <View className="flex-1">
                            <Text className="font-semibold text-lg text-white">{message.address}</Text>
                            <Text className={`font-medium ${message.class!=="ham" ? 'text-red-500' : 'text-white' } `}>{message.body}</Text>
                        </View>
                        <View>
                            <Text className="font-medium text-white"> {
                            new Date(message.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
                            }</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
    </View>
    
  )
}

export default SpamScreen