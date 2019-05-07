const express = require("express");

const Posts = require('../data/db');

const router = express.Router();


//GET - RETRIEVE ALL POSTS
router.get('/', async (req, res) => {
    try{
        const posts = await Posts.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "The Posts Information could not be retrieved"
        });
    }
});


//GET - RETRIEVE POST BY ID
router.get('/:id', async(req,res) => {
try{
    const post = await Posts.findById(req.params.id);
    if (post){
         res.status(200).json(post);
    } else {
        res.status(404).json({message: "The post with the specified ID does not exist"});
         }
} catch(error) {
console.log('error', error);
res.status(500).json({error: "The post information could not be retrieved"});
}
});


//POST - CREATE A NEW POST

router.post('/', async(req,res) => {
    try{
        const post = await Posts.add(req.body);
        if (post){
            res.status(201).json(post);
    } else {
        res.status(400).json({errorMessage: "Provide title and contents for the post"})
    }
} catch (error) {
console.log('error', error);
res.status(500).json({error: "There was an error while saving the post to the database" });
}
});


//PUT - UPDATE A POST BY ID

router.put('/:id', async(req,res) => {
    try{
        const post = await Posts.findById(req.params.id);

        if (post) {
            res.status(200).json(post);
        }else {
            res.status(404).json({message: "The post with the specified ID does not exist"});
        }
        } catch(error){
            console.log('error', error);
            res.status(500).json({error: "The post information could not be modified"});
        }
    });


//DELETE - REMOVE POST BY ID


module.exports = router;