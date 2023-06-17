const getColor = () =>{
    // color code's are hexadecimal codes 
    const randomNumber= Math.floor(Math.random() * 16777215);
    const randomCode="#" + randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode;     
    document.getElementById("color-code").innerText = randomCode;

    // For Auto Copy In The Clipboard.
    navigator.clipboard.writeText(randomCode);

}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
// 16777215 by multiplying this number it makes hexa decimal code. which we can use in generating hexadecimal color code.
getColor()