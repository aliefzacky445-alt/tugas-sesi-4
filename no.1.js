let studentScore = [
    {
        name : 'Anmas',
        score : 90
    },
    {
        name : 'Zahong',
        score : 80
    },
    {
        name : 'Capluk',
        score : 100
    },
]

let tertinggi = studentScore[0]

for (let i in studentScore) {
    if (studentScore[i].score > tertinggi.score) {
        tertinggi = studentScore[i]
    }
}

console.log("Siswa dengan nilai paling besar")
console.log("Nama :" + tertinggi.name)
console.log("Nilai :" + tertinggi.score)