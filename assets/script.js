var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listtopicss() {

    for (var x = 0; x < topics.length; x++) {

        console.log(topics[x]);
    }
}

function selecttopics() {

    if (randomTopic === 'HTML') {
    console.log("let's study HTML");

    } else if (randomTopic === 'CSS') {
    console.log("let's study CSS");

    } else if (randomTopic === 'Git') {
    console.log("let's study Git!");

    } else if (randomTopic === 'JavaScript') {
    console.log("let's study LavaScript!")

    } else {
    console.log("please try again");
    
    }

}
console.log('Here are the topics we learned through Prework:');

listtopicss();

console.log('which topic should we study first?');

selecttopics();