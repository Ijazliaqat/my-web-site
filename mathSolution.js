
let inputValue = document.querySelector('.palindrome-input').value;
let btnPalindrome = document.querySelector('.btn-palindrome');
let result = document.querySelector('.show-result');

function checkPalindrome(inputValue) {

    const arrayValues = inputValue.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if(inputValue == reverseString) {
        result.textContent = 'It is a palindrome';
    }
    else {
        result.textContent = 'It is not a palindrome';
    }
}


btnPalindrome.addEventListener('click', function () {
    console.log(inputValue);
    const value = checkPalindrome(inputValue);

    console.log(value);
    
})

