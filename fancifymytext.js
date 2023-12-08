alert("Hello, world!");
const biggerButton = document.getElementById('biggerButton');

biggerButton.addEventListener('click', function() {
    alert('Hello, world!');
});

function makeBigger() {
    const textField = document.querySelector('textarea');
    textField.style.fontSize = '24pt';
}

function toUpperCaseAndMoo() {
    const textField = document.querySelector('textarea');
    let text = textField.value;

    //大写
    text = text.toUpperCase();

    //"-Moo"
    const sentences = text.split('.'); // 将文本按句拆分成数组
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(' ');
        if (words.length > 1) {
            words[words.length - 1] += '-Moo'; // add"-Moo" 
            sentences[i] = words.join(' ');
        }
    }

    textField.value = sentences.join('. '); //用句号分隔

    // 改变文本框的样式
    textField.style.fontWeight = 'normal';
    textField.style.color = 'black';
    textField.style.textDecoration = 'none';
}
