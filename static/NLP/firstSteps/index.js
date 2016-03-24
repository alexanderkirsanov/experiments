import bayes from 'bayes'
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