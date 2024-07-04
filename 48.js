// create a function that takes a sentence and returns a running list of constants per word and vowels per word.

function stringCode(sentence){
    const words = sentence.split(' ')

    function isConsonants(char){
        const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
        return consonants.includes(char)
    }

    function countConsonantsAndVowel(word){
        let consonants = 0 ;
        let vowels = 0;

        for(const char of word){
            if(isConsonants(char)){
                consonants++
            }else if("aeiouAEIOU".includes(char)){
                vowels++;
            }
        }
        return consonants + " " + vowels
    }

    const consonantsCount = words.map(word=>countConsonantsAndVowel(word))
    return consonantsCount;
}

console.log(stringCode('Happy birthday to you'));