let n = +prompt('son kiriting')
while (isNaN(n) || n == 0) {
    n = +prompt('sondan boshqa narsa kiritmang')
}
let c = ""
for (let i = 0; i < n; i++) {
    for (let b = 0; b < n; b++) {
        if (b == i || i == 0 || b == 0 || b == n - 1 || i == n - 1) {
            c+='🟥'
        }
        else{
            c+='🟩'
        }
    }
    console.log(c);
    c = ""
    
}