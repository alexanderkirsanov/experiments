import ReactDOM from 'react-dom';
import React from 'react';
import bayes from 'bayes'
import ReactTranscriber from 'react-transcriber';
let activeClassifier ;
const profileProcessing = () => {
    activeClassifier = profileClassifier();
};
const searchProcessing = () => {

};
const dashboard = () => {

};
const getTypes = () => [
    {name: 'first', action: ()=>'test'},
    {name: 'second', action: ()=>'second'},
    {
        name: 'third',
        action: ()=>'third'
    }];
const profileClassifier = () => {
    const classifier = bayes();
    getTypes().forEach(type=> classifier.learn(type.name, type.action));
    return classifier;
};
const basicClassifier = () => {
    const classifier = bayes();
    classifier.learn('open profile', profileProcessing);
    classifier.learn('show profile', profileProcessing);
    classifier.learn('show entity', profileProcessing);
    classifier.learn('show profile', profileProcessing);
    classifier.learn('show dashboard', dashboard);
    classifier.learn('open dashboard', dashboard);
    classifier.learn('search profile', searchProcessing);
    classifier.learn('search hcp', searchProcessing);
    classifier.learn('search location', searchProcessing);
    return classifier;
};

activeClassifier = basicClassifier();
var test = (...arg) => {
    console.log(arg);
    activeClassifier.categorize(arg[arg.length - 1].toLowerCase()).call(null);
};
ReactDOM.render(<ReactTranscriber
    onTranscription={test.bind(this, 'standard')}/>, document.getElementById('playground'));
