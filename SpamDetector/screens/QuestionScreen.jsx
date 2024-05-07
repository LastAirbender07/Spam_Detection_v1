import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { askQuestion } from './Bradie';
import { useNavigation } from '@react-navigation/native';
import NetInfo from "@react-native-community/netinfo";

const Question = () => {
  const navigation = useNavigation();
  const [textResponse, setTextResponse] = useState('');
  const [question, setQuestion] = useState('');

  const handleAskQuestion = async () => {
    try {
      const isConnected = await checkInternetConnectivity();
      if (!isConnected) {
        throw new Error('Internet not connected');
      }

      const response = await askQuestion({ ask: question });
      setTextResponse(response);
    } catch (error) {
      console.error("Error fetching text response:", error.message);
      handleErrorResponse(error);
    }
  };

  const checkInternetConnectivity = async () => {
    try {
      const state = await NetInfo.fetch();
      return state.isConnected;
    } catch (error) {
      console.error("Error checking internet connectivity:", error);
      return false;
    }
  };

  const handleErrorResponse = (error) => {
    let errorMessage = '';
    if (error.message === 'Internet not connected') {
      errorMessage = 'Please check your internet connection';
    } else if (error.message === 'Processing error') {
      errorMessage = 'Error processing your request';
    } else {
      errorMessage = 'An error occurred. Please try again later';
    }
    Alert.alert('Error', errorMessage);
  };

  return (
    <SafeAreaView className="w-full h-full bg-black p-5">
      <TouchableOpacity 
        className="w-[60px] h-[60px] bg-[#333] rounded-full justify-center items-center"
        onPress={() => navigation.navigate("Home")}>
          <Image 
            source={require('../assets/ai.png')}
            style={{ width:50, height:50, borderRadius:25, resizeMode:'cover' }}/>
      </TouchableOpacity>
      <View className="flex-1 justify-center items-center bg-black p-5">
        <View className="p-5">
          <Image 
            source={require('../assets/chat.png')}
            style={{ width:70, height:70, borderRadius:25, resizeMode:'cover' }}
          />
        </View>
        <TextInput
          className="w-full h-15 bg-[#444] text-white font-medium text-lg px-4 py-2 border-2 border-red-400 rounded-md"
          onChangeText={text => setQuestion(text)}
          value={question}
          placeholder="Type your question here..."
          placeholderTextColor="gray"
        />
        <TouchableOpacity 
        className="bg-red-600 w-[40%] px-1 py-2 items-center my-5 rounded-md"
        onPress={handleAskQuestion}>
          <Text className="text-white font-semibold text-lg">Ask</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-white font-semibold text-lg my-3">Response:</Text>
        <ScrollView className="w-full h-1/2 bg-[#444] p-5">
          <Text className="text-white font-semibold text-lg my-3 pb-3">{textResponse}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Question;
