const express = require('express');

const router = express.Router();

const gravatar = require('gravatar');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const config = require('config');

const { check, validationResult } = require('express-validator');

const User = require('../../models/User');


router.post('/', [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid Email').isEmail(),
        check('password', 'PLease enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    async(req, res) => {
        //console.log();
        const errors = validationResult(req);
        // console.log({ errors: errors.array() });
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            // see if user exists

            let user = await User.findOne({ email });

            if (user) {
                res.status(400).json({ errors: [{ msg: 'Users already exists' }] });

                // res.send('Users registered');
            }

            //get user gravatar

            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            user = new User({
                name,
                email,
                avatar,
                password
            });
            // encrypt the pw 

            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'), { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                });


        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }



    });

module.exports = router;