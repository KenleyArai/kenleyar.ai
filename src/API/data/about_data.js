import meImage from 'images/me.svg';
import lenaImage from 'images/lena.svg';
import inuImage from 'images/inu.svg';

var boy_payload = {
    msg: "Hello! I'm Kenley, and I am a Software Engineer. I have a mixed bag of interests" +
        ' and experiences. At a young age, I traveled the world to as my mother finished ' +
        'her PH.D. This provided me a wide-ranging view and understanding of the world. M' +
        'ore importantly, it taught me how people use software very differently around th' +
        'e world.From there I went to school to achieve my degree in Computer Science a' +
        'nd Engineering from the University of California Riverside. While at school I wo' +
        'rked for Dr. Eamonn Keogh in his Machine Learning lab. I worked on his sensor th' +
        'at classifies mosquitos. My biggest accomplishment while in school was being sen' +
        't multiple times to the Center for Disease Control in Atlanta to gather data on ' +
        'various species, but specifically to classify the invasive species Aedes Aegypti' +
        '.Currently, I am honing my skills as a Software Engineer.',
    title: "The Boy",
    src: meImage
};

var girl_payload = {
    msg: 'This is my beautiful wife, and we got married in fall of 2017 (you can see our w' +
        'edding pictures under projects)! She is the love of my life, and she is getting ' +
        'a Ph.D. from Claremont Graduate School. She is amazing!',
    title: "The Girl",
    src: lenaImage
};

var dog_payload = {
    msg: "This is my dog! He is the brains behind our operation. He's the one who creates " +
        'our five-year and ten-year plans. We pay him with belly rubs and treats! He also' +
        ' has an album...',
    title: "The Dog",
    src: inuImage
};

const about_payload = [
    boy_payload,
    girl_payload,
    dog_payload
];

export default about_payload;