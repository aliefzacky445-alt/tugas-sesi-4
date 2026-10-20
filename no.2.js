var motorGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentina',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
]

let hasil = {}

for (let i in motorGP) {
    let negara = motorGP[i].winner.country
    let namaLengkap = motorGP[i].winner.firstName + "" + motorGP[i].winner.lastName
    let lokasi = motorGP[i].circuit + "," + motorGP[i].location

    if (hasil[negara] == undefined) { 
        hasil[negara] = { 
            winninngCircuits : [],
            totalWin : 0
        }
    }

    hasil[negara].winninngCircuits.push({
        name : namaLengkap,
        winLocation : lokasi
    })
    hasil[negara].totalWin = hasil[negara].totalWin + 1
}

console.dir(hasil, { depth: null})
