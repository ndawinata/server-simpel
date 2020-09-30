import mongoose from 'mongoose'

var Schema = mongoose.Schema({
    date: Date,
    kondisi: String,
    merek: String,
    stasiun: String,
    tahun: Number,
})


const radar = mongoose.model('Radar', Schema)
const awos = mongoose.model('Awos', Schema)
const digitalisasi = mongoose.model('Digitalisasi', Schema)
const radiosonde = mongoose.model('Radiosonde', Schema)


export {
    radar,
    awos,
    digitalisasi,
    radiosonde
}

// convert date to JSON => var d = new Date()
// d.toJSON()