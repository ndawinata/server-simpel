import axios from 'axios'
import moment from 'moment'
import parseString from 'xml2js'
const parse = parseString.parseString

import {
    radar,
    awos,
    digitalisasi,
    radiosonde
} from './model'

// ------- Get Data ---------

// Get Radar
export const getradar = (request, response) => {
    radar.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil data!',
            datas
        })
    })
}

// Get Awos
export const getawos = (request, response) => {
    awos.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil data!',
            datas
        })
    })
}

// Get Digitalisasi
export const getdigitalisasi = (request, response) => {
    digitalisasi.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil data!',
            datas
        })
    })
}

// Get Radiosonde
export const getradiosonde = (request, response) => {
    radiosonde.find().exec((error, datas) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal mengambil data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil mengambil data!',
            datas
        })
    })
}

// Get data notif
// export const getnotif = (request, response) => {
//     notif.find().exec((error, datas) => {
//         if (error) {
//             return response.json({
//                 'success': false,
//                 'message': 'Gagal mengambil datas!',
//                 error
//             })
//         }
//         return response.json({
//             'success': true,
//             'message': 'Berhasil mengambil datas!',
//             datas
//         })
//     })
// }



// ------- Add Data ---------

// Add Radar
export const addradar = (request, response) => {
    const newData = new radar(request.body)

    newData.save((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}

// Add Awos
export const addawos = (request, response) => {
    const newData = new awos(request.body)

    newData.save((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}

// Add Digitalisasi
export const adddigitalisasi = (request, response) => {
    const newData = new digitalisasi(request.body)

    newData.save((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}

// Add Radiosonde
export const addradiosonde = (request, response) => {
    const newData = new radiosonde(request.body)

    newData.save((error, data) => {
        if (error) {
            return response.json({
                'success': false,
                'message': 'Gagal menambah data!',
                error
            })
        }
        return response.json({
            'success': true,
            'message': 'Berhasil Menambahkan data',
            data
        })
    })
}