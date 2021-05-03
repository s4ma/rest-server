const { Router } = require('express')
const users = require('../controllers/users.controller')

const router = Router()

router.get('/', users.getUsuario)
router.post('/', users.postUsuario)
router.put('/:id', users.putUsuario)
router.delete('/', users.deleteUsuario)

module.exports = router