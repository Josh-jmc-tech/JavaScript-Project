function full_Sentence() {
    var part_1 = " I have" ;
    var part_2 = " made this" ;
    var part_3 = " into a complete";
    var part_4 = " Sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence
}

function slice_Method() {
    var Sentence = "The Guitar is so beautiful";
    var Section = Sentence.slice(17,27);
    document.getElementById("Slice").innerHTML = Section;
}

function to_Uppercase() {
    let text = "Hello, World"
    let result = text.toUpperCase();
    document.getElementById("Upper").innerHTML = result;
}

function string_Method() {
    var X = 421;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

function precision_Method() {
    var X = 3210123.459078;
    document.getElementById("Numbers").innerHTML = X.toPrecision(5);
}

function fix_Method() {
    let num = 36.890;
    let n = num.toFixed();
    document.getElementById("Fix").innerHTML = n;
}