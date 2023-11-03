// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('community', {
    name: 'community',

    component: [],

    title: 'community',

    data: {},
  })
})

// Експортуємо глобальний роутер
module.exports = router
