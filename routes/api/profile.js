const express = require("express");

const router = express.Router();

const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const profile = require('../../models/Profile');

const User = require('../../models/User');

const Profile = require("../../models/Profile");

const request = require('request');

const config = require('config');

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name']);


        if (!profile) {
            return res.status(400).json({ msg: 'There is no profile for this user' });
        }
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private

router.post(
    '/', [
    auth, [
        check('status', 'Status is required').not().isEmpty(),
        check('skills', 'skills is required').not().isEmpty(),
        check('gender', 'Gender is required').not().isEmpty()
    ]
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // destructure the request
        const {
            gender,
            company,
            website,
            location,
            bio,
            status,
            githubusername,
            skills,
            youtube,
            twitter,
            instagram,
            linkedin,
            facebook,
            kaggle,
            geeksforgeeks,
            codeforces,
            codechef,
            leetcode
            // spread the rest of the fields we don't need to check

        } = req.body;


        //build profile obj

        const profileFields = {};
        profileFields.user = req.user.id;
        if(gender) profileFields.gender = gender
        if (company) profileFields.company = company;
        if (website) profileFields.website = website;
        if (location) profileFields.location = location;
        if (bio) profileFields.bio = bio;
        if (status) profileFields.status = status;
        if (githubusername) profileFields.githubusername = githubusername;
        if (skills) {
            profileFields.skills = skills.toString().split(',').map(skill => ' ' + skill.trim() + ' ');
        }
        const user = await User.findById(req.user.id).select('-password');

        if(gender==='female'||gender==='male'){
            console.log(gender)
        profileFields.avatar = `https://avatars.dicebear.com/api/${gender}/${user._id}.svg?mood[]=happy`;
        }
        else
            profileFields.avatar = `https://avatars.dicebear.com/api/human/${user._id}.svg?mood[]=happy`;



        //Build social object
        profileFields.social = {}
        if (youtube) profileFields.social.youtube = youtube;
        if (twitter) profileFields.social.twitter = twitter;
        if (facebook) profileFields.social.facebook = facebook;
        if (linkedin) profileFields.social.linkedin = linkedin;
        if (instagram) profileFields.social.instagram = instagram;

        //build coding object
        profileFields.coding = {}
        if (kaggle) profileFields.coding.kaggle = kaggle;
        if (geeksforgeeks) profileFields.coding.geeksforgeeks = geeksforgeeks;
        if (codeforces) profileFields.coding.codeforces = codeforces;
        if (codechef) profileFields.coding.codechef = codechef;
        if (leetcode) profileFields.coding.leetcode = leetcode;

        try {
            let profile = await Profile.findOne({ user: req.user.id });
            if (profile) {
                //update
                profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
                return res.json(profile);
            }

            //create 
            profile = new Profile(profileFields);
            await profile.save();


            res.json(profile);



        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    });



// @route    POST api/profile
// @desc    get all profiles
// @access   public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name']);
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});


// @route    POST api/profile/user/:user_id
// @desc    get profile by user ID
// @access   public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name']);
        if (!profile) return res.status(400).json({ msg: 'Profile Not Found' });

        res.json(profile);
    } catch (err) {
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found' });
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// @route    Delete api/profile
// @desc    delete profile
// @access   private
router.delete('/', auth, async (req, res) => {
    try {
        //remove users post



        //remove profile
        await Profile.findOneAndRemove({ user: req.user.id });
        //remove user
        await User.findOneAndRemove({ _id: req.user.id });


        res.json({ msg: 'User Removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

// @route    get api/profiles/search 
// @desc   search user
// @access   public

router.get('/search', async (req, res) => {
    try {
        console.log(req.query);


        const users = await User.find({ name: { $regex: req.query.name, $options: 'i' } });
        // let profiles = users.forEach(async (user) => {
        //     let id = user.id;
        //     return await Profile.find({ user: id });


        // })
        let profiles = [];
        for (let i = 0; i < users.length; i++) {
            let id = users[i].id;
            let j = await Profile.find({ user: id }).populate('user', ['name']);
            profiles.push(j[0]);
        }
        
        res.json(profiles);
        
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        console.log("error");

    }

});



// @route    get api/profile/github/:username
// @desc   get user repos
// @access   public
router.get('/github/:username', (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: { 'user-agent': 'node,js' }

        };
        request(options, (error, response, body) => {
            if (error) console.error(error);

            if (response.statusCode !== 200) {
                res.status(404).json({ msg: 'No Github profile found' });
            }

            res.json(JSON.parse(body));
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');

    }





})


// router.get('/search', async(req,res)=>{
//     try {
        
//         const profiles = await Profile.find({ name: {$regex: req.query.name, $options:'i'} }).populate('user')
//         res.json(profiles);

//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// })

module.exports = router;