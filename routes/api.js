const express = require('express');
const router = express.Router({});

const createMeetupListResponseObject =
    require('../app/helpers/response/_createMeetupListResponseObject');

/* GET home page. */
router.get('/', (req, res) => res.render('index'));

router.get('/v1/meetup-list', async (req, res) => res.json(await createMeetupListResponseObject()));

module.exports = router;
