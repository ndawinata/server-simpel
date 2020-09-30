import express from 'express'
import * as controller from './controller'

const Route = express.Router()

Route.route('/radar')
    .get(controller.getradar)
    .post(controller.addradar)

Route.route('/awos')
    .get(controller.getawos)
    .post(controller.addawos)

Route.route('/digitalisasi')
    .get(controller.getdigitalisasi)
    .post(controller.adddigitalisasi)

Route.route('/radiosonde')
    .get(controller.getradiosonde)
    .post(controller.addradiosonde)

export default Route