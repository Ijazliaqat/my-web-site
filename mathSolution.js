
let inputValue = document.querySelector('.palindrome-input').value;
let btnPalindrome = document.querySelector('.btn-palindrome');
let result = document.querySelector('.show-result');


function checkPalindrome(str) {  
    const length = str.lengthgth;  
  
    for (let i = 0; i < length / 2; i++) {  
        if (str[i] !== str[length - 1 - i]) {  
          result.textContent= 'It is not palindrome'; 
          return;
        }  
    }  
    result.textContent='It is a palindrome';  
}  


btnPalindrome.addEventListener('click', function () {
    checkPalindrome(inputValue);
});

