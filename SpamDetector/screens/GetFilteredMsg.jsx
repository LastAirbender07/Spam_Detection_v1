import React, { useState, useEffect } from 'react';
import { loadTensorflowModel } from 'react-native-fast-tflite';
import features from '../model/features.json'; 

const GetFilteredMsg = ({ messages, onFilter }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await loadTensorflowModel(require('../model/model.tflite'));
        setModel(loadedModel);
        console.log('Model loaded successfully');
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };
    loadModel();
  }, []);

  useEffect(() => {
    if (model && messages.length > 0) {
      classifyMessages();
    }
  }, [model, messages]);

  const classifyMessages = async () => {
    const filteredMsgs = [];
    for (const message of messages) {
      const predictionResult = await detectSpam(message);
      message.class = predictionResult;
      filteredMsgs.push(message);
    }
    onFilter(filteredMsgs);
  };

  const detectSpam = async (message) => {
    try {
      const tokens = tokenizeText(message.body);
      const vector = vectorizeText(tokens);
      const outputData = await model.runSync([new Float32Array(vector)]);
      return outputData[0] > 0.5 ? 'spam' : 'ham';
    } catch (error) {
      console.error('Error detecting spam:', error);
      return 'error';
    }
  };

  const tokenizeText = (text) => {
    return text.toLowerCase().replace(/[^\w\s]/gi, '').split(/\s+/);
  };

  const vectorizeText = (tokens) => {
    const vector = features.map((feature) => (tokens.includes(feature) ? 1.0 : 0.0));
    return vector;
  };

  return null;
};

export default GetFilteredMsg;
