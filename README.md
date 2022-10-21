# Is this a banana? 🍌

No. Maybe? I don't know. Use this app to find out.

Use the [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) model to confirm your suspicions about bananas 🍌🤔

## Getting Started

Visit the live demo [here](https://is-it-a-banana.vercel.app/) on mobile or desktop and upload an image. After a few seconds, you'll get a prediction.

Feel free to test it out with these images: [Banana](https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80), [Hamburger](https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2499&q=80), [Apple](https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)

## Demo

<div align="center">
<img src='https://media1.giphy.com/media/HT0QqV8qw5lhHiLfwr/giphy.gif?cid=790b7611defba46b8c8d5e41b0dcadf9b9fc281db41eda40&rid=giphy.gif&ct=g' alt="banana is found demo" />
<img src='https://media2.giphy.com/media/yos6l1Uk0MDnDsC3qP/giphy.gif?
cid=790b76115895ea2206c60bf44daa0d37c743b768176f0f5a&rid=giphy.gif&ct=g' alt="no banana demo" />
</div>

## Built With

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) 

## Motivation

I wanted to learn more about machine learning and how to use TensorFlow.js. I explored the [TensorFlow.js](https://www.tensorflow.org/js) website and found a pre-trained image classification model called [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet). I used this model to classify images of bananas and other objects.

## Challenges

### Image Upload and Tensor

I first had to learn how to use the `URL.createObjectURL` method to create a URL for the image file. After reading the TensorFlow docs, I learned that the `tf.browser.fromPixels` method can be used to convert an image to a tensor. The `fromPixels` method takes in either an `ImageData`, `HTMLImageElement`, `HTMLCanvasElement`, or `HTMLVideoElement`. I learnt the image data contained the `imageElement` which could be used to convert the image to a tensor.

Using the tensor, I could then pass it into the `classify` method of the MobileNet model. The `classify` method returns a promise which resolves to an array of predictions. I then used the `map` method to get the top predictions and determined if the predictions included the string `banana`.
