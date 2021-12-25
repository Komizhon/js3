let num = +prompt("Istalgan soningizni kiriting")

while (isNaN(num) || num == 0) {
    num = +prompt("Siz raqam kiritmadingiz Iltimos boshqattan kiriting ")
} if (num % 2) {
    alert("Siz toq son kiritdingiz")
} else {
    alert("Siz juft son kiritdingiz")
}

let num1 = +prompt("Birinchi sonni kiriting ")


while (num1 == 0 || isNaN(num1)) {
    num1 = +prompt("Siz raqamni noto'g'ri kiritdingiz Iltimos boshqattan kiriting")

}
let degree = +prompt("Necha darajaga oshiramiz? ")
while (isNaN(degree) || degree == 0) {
    degree = +prompt("Siz darajani noto'g'rri kiritdingiz iltimos boshqattan kiriting")
}
alert("Javob: " + num1 ** degree)