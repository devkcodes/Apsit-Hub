const express = require("express");

const router = express.Router();

const { check, validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route    POST api/post
// @desc     Create a post
// @access   Private

router.post('/', [auth, [
        check('text', 'Text is required').not().isEmpty()
    ]],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');
            const profile = await Profile.findOne({user:req.user.id})
            

            const newPost = new Post({
                text: req.body.text,
                name: user.name,
                avatar: profile.avatar,
                user: req.user.id
            })

            const post = await newPost.save();

            res.json(post);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }



    });

// @route    get api/posts
// @desc     get all post
// @access   Private

router.get('/', async(req, res) => {
    try {
        console.log('im here')
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route    get api/posts/:id
// @desc     get post by id
// @access   Private

router.get('/:id', auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        console.error(err.message);

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });
        }

        res.status(500).send('Server Error');
    }
});

// @route    delete api/posts
// @desc     delete post
// @access   Private

router.delete('/:id', auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ msg: 'Post not found' });
        }

        //check user
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not Authorised' });
        }

        await post.remove();

        res.json({ msg: "Post removed" });
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' });

        }
        res.status(500).send('Server Error');
    }
});

// @route    PUT api/posts/like/:id
// @desc     Like post
// @access   Private
router.put('/like/:id', auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        //check if its been already liked

        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ msg: 'Post already liked' });
        }
        post.likes.unshift({ user: req.user.id });

        await post.save();

        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route    PUT api/posts/unlike/:id
// @desc     unLike post
// @access   Private
router.put('/unlike/:id', auth, async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        //check if its been already liked

        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ msg: 'Post has not been liked yet' });
        }

        //get remove index
        const removeIndex = post.likes.map(like => like.user.toString()).indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);

        await post.save();

        res.json(post.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route    POST api/post/comments/:id
// @desc     comment on post
// @access   Private

router.post('/comment/:id', [auth, [
        check('text', 'Text is required').not().isEmpty()
    ]],
    async(req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const post = await Post.findById(req.params.id);
            const profile = await Profile.findOne({user:req.user.id})


            const newComment = {
                text: req.body.text,
                name: user.name,
                avatar: profile.avatar,
                user: req.user.id
            };

            post.comments.unshift(newComment);

            await post.save();

            res.json(post.comments);

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }



    });

// @route    delete api/post/comments/:id:comment_id
// @desc     delete comment
// @access   Private

router.delete('/comment/:id/:comment_id', auth,
    async(req, res) => {

        try {
            const post = await Post.findById(req.params.id);

            //pull out comment

            const comment = post.comments.find(
                comment => comment.id === req.params.comment_id
            );


            //make sure comment exists
            if (!comment) {
                return res.status(400).json({ msg: 'Comment does not exist' });

            }

            //check user
            if (comment.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'Comment does not exist' });
            }

            const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);

            post.comments.splice(removeIndex, 1);

            await post.save();

            res.json(post.comments);





        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }



    });

module.exports = router;