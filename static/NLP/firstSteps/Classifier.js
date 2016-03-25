import bayes from 'bayes';
class Classifier {
    constructor() {
        this.classifier = bayes();
        this.actions = new Map();
    }
    learn(text, action) {
        const name = action.name;
        if (!this.actions[name]){
            this.actions[name] = action;
        }
        this.classifier.learn(text, action.name);
    }
    categorize(text){
        this.actions[this.classifier.categorize(text)].call(null);
    }
}

export default Classifier;
