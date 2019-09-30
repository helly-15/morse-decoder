const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let numberOfWords=expr.length / 10;
    let binaryWordsArray =[];
    let j=0;
    //create array of binary numbers devided into words
    for(let i=0; i<numberOfWords;i++){
        binaryWordsArray[i]=expr.slice(j,j+10); 
        j=j+10;
        if (binaryWordsArray[i][1]!='*'){
        let positionOfOne=binaryWordsArray[i].indexOf(1);
        binaryWordsArray[i]=binaryWordsArray[i].slice(positionOfOne);
        } else binaryWordsArray[i]=0;
        //change array of numbers into morse code
        let morseWord="";
        
        for(let x=0; x<binaryWordsArray[i].length; x=x+2 ){
            
            if (binaryWordsArray[i].slice(x,x+2)=="10"){
                morseWord=morseWord+".";
            }
            else if(binaryWordsArray[i].slice(x,x+2)=="11"){
                morseWord=morseWord+"-";
            }
            else morseWord=morseWord+" ";

        }
        binaryWordsArray[i]=morseWord;
    }
    let uncoded="";
    for (let i=0; i<binaryWordsArray.length; i++){
        let b=binaryWordsArray[i];
        
       if (binaryWordsArray[i]!=0) {uncoded=uncoded+MORSE_TABLE[b]}
       else uncoded=uncoded+" ";
    }

    return uncoded;
    // write your solution here
}



module.exports = {
    decode
}