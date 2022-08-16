const express = require("express");
const router = express.Router();
const { add, remove } = require("../models/favorites.model");

//! Add - PUT
router.put("/add", async (req, res) => {
    //! Verify the data they gave you is valid
    const favorite = req.body;
    if (!favorite.joke_id) {
        return res.send({
            success: false,
            data: null,
            error: "Invalid data provided",
        });
    }
    const resObj = await add({ ...favorite, favorite_id: req.favorite_id });

    return res.send(resObj);
});

//! Delete - DELETE
router.delete("/delete/:joke_id", async (req, res) => {
    const joke_id = req.params.joke_id;
    const resObj = await remove(joke_id, req.favorite.id);

    return res.send(resObj);
});


module.exports = router;