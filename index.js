
let form = document.querySelector('#form');



form.addEventListener('submit', function(e) {
    e.preventDefault()

    function countVowel(str) {

        const count = str.match(/[aeiou]/gi).length;

        return count
    }

    var input = document.querySelector('#main__input').value;
    var result = countVowel(input);
    document.querySelector("#output__main").innerHTML = `<div>There are ${result} vowels in this text</div>`
    
})








