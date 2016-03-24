import ReactDOM from 'react-dom';
import React from 'react';
import bayes from 'bayes'
import ReactTranscriber from 'react-transcriber';

const classifier = bayes();
classifier.learn('open profile', 'profile');
classifier.learn('show profile', 'profile');
classifier.learn('show entity', 'profile');
classifier.learn('show profile', 'profile');
classifier.learn('show dashboard', 'dashboard');
classifier.learn('open dashboard', 'dashboard');
classifier.learn('search profile', 'search');
classifier.learn('search hcp', 'search');
classifier.learn('search location', 'search');

console.log(classifier.categorize('search location near me'));
console.log(classifier.categorize('search profile near me'));
console.log(classifier.categorize('search hco'));
console.log(classifier.categorize('open dashboard'));
console.log(classifier.categorize('hi'));
var test = (...arg) => {
    console.log(arg);
    console.log(classifier.categorize(arg[arg.length - 1].toLowerCase()));
};
ReactDOM.render(<ReactTranscriber onTranscription={test.bind(this, 'standard')}/>, document.getElementById('playground'));
