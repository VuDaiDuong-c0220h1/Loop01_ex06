let a = 0;
let result = 0;
for (count = 0; count < 30;) {
    if (a % 7 === 0) {
        result += a;
        document.write("Số chia hết cho 7: " + a + " Tổng là: " + result + "<br/>" );
        count += 1;
        a += 1;
    } else {
        a += 1;
    }
}