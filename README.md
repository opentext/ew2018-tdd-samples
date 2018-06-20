# Enterprise World 2018 Developer Lab
How to build mobile apps that work: TDD and BDD for AppWorks application development

## Focus
Our aim with this session is to show you the principles behind Test Driven
Development (TDD) and Behavior Driven Development (BDD). This code repository provides
some examples that you can use to get started with the methodologies we will be
explaining in this course.

## Overview
We will be building an audio player class in javascript using TDD. The audio player
will be able to:
- load a file from a url
- play audio using HTML5 Audio API's
- pause and resume playback
- stop playback

## Getting Started
Install node.js version 8 or later if you havent done so already:

```html
https://nodejs.org/en/
```

Install the dependencies

```bash
npm install
```

Run the test suite

```bash
npm run test
```

## Test Driven Development
You will see that we have a test suite written, but if you look closely at
Player.js, you will see it doesnt have any functional code! This is the point of TDD,
the tests drive the development of the class. It is your job to fill in Player.js with code necessary
to make the tests pass.