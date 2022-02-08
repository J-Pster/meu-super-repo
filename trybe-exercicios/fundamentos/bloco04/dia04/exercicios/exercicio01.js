let player = {
    name: 'Marta',
    lastname: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora %s %s tem %s anos de idade.',player.name,player.lastname,player.age)
console.log('A jogadora %s %s foi eleita a melhor do mundo por %s vezes.',player.name,player.lastname,player.bestInTheWorld.length)
console.log('A jogadora possui %s medalhas de ouro e %s medalhas de prata.',player.medals.golden,player.medals.silver);