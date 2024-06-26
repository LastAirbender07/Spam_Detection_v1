﻿# Spam_Detection_v1
 
<p align="center">
  <img src="https://github.com/LastAirbender07/Spam_Detection_v1/assets/101379967/beeec7c4-8108-4952-92cc-9c0745f86ac5" alt="Designer (2)" />
</p>

## Introduction

The Spam Detection App is a mobile application developed using React Native for Android devices. It is designed to classify SMS messages received on the device as either spam or ham (non-spam). The app utilizes a machine learning model trained on a dataset of SMS messages to make predictions in real-time.

## Functionality

### SMS Classification
- The main functionality of the app is to classify incoming SMS messages as either spam or ham.
- Spam messages are displayed in red color to alert the user.

### User Interface
- The app provides a user-friendly interface for viewing incoming SMS messages and their classification.

## Machine Learning Model

### Dataset
- The machine learning model was trained on a dataset of SMS messages.
- The dataset contains labeled examples of both spam and ham messages.

### Data Preprocessing
- Before training the model, the SMS messages were preprocessed:
  - Removed unnecessary columns from the dataset.
  - Applied text vectorization using CountVectorizer to convert text messages into numerical feature vectors.

### Model Architecture
- The model architecture consists of a simple feedforward neural network:
  - Input layer with the number of neurons equal to the length of the feature vector.
  - Hidden layer with 128 neurons and ReLU activation function.
  - Output layer with 1 neuron and sigmoid activation function for binary classification.

### Training
- The model was trained using the Adam optimizer and binary cross-entropy loss function.
- Training was conducted for 10 epochs with a batch size of 32.

### Model Conversion
- After training, the model was converted to TensorFlow Lite format for efficient deployment on mobile devices.
- TensorFlow Lite Converter was used to convert the trained Keras model to TensorFlow Lite.

<table style="margin: auto;">
  <tr>
    <td align="center"><img src="https://github.com/LastAirbender07/Spam_Detection_v1/assets/101379967/d414cbce-15a3-4231-a7f2-14f042a3446c" alt="Screenshot_20240507_121000 (1)" width="400px" /></td>
    <td width="100px"></td>
    <td align="center"><img src="https://github.com/LastAirbender07/Spam_Detection_v1/assets/101379967/e3ecf062-4171-444f-a4e8-5285dec0ca84" alt="Screenshot_20240507_120853 (1)" width="400px" /></td>
  </tr>
</table>


## Download the spamDetector.apk file and install in your android device to experience it

## Improvements
- Implement optimizations to reduce the size and latency of the TensorFlow Lite model for better performance on mobile devices.
- Explore additional preprocessing techniques such as handling of special characters, stemming, and lemmatization to improve model accuracy.
- Implement real-time updates for model retraining using user feedback to continuously improve classification accuracy.
- Integrate a user feedback mechanism to allow users to report misclassified messages for model refinement.
- Implement robust privacy measures to ensure that users' SMS data is handled securely and responsibly.

## Conclusion

The Spam Detection App provides a convenient solution for identifying and filtering spam messages from users' SMS inboxes. With further enhancements and refinements, it has the potential to become an indispensable tool for mobile users in managing unwanted communication effectively.
