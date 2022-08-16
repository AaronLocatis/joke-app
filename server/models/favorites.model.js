const query = require("../config/database.config");

async function add(favorite) {
    try {
        let { insertId } = await query("INSERT INTO favorites(joke_id) VALUES (?)", [favorite.joke_id])(
            [favorite.joke_id]
        )
        return { success: true, data: { ...favorite, id: insertId }, error: null };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong" };
    }
}
async function remove(joke_id) {
    try {
        //! remove that one
        await query(
            "DELETE FROM favorites WHERE favorites.joke_id = ?",
            [joke_id]
        );
        //! send back a response (error or success)
        return { success: true, data: "Successfully deleted", error: null };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong" };
    }
}

async function getAll() {
    try {
        //! Get the favorites for that user
        const favorites = await query("SELECT FROM favorites");
        //! send back a response (error or success)
        return { success: true, data: favorites, error: null };
    } catch (err) {
        return { success: false, data: null, error: "Something went wrong" };
    }
}

module.exports.add = add;
module.exports.remove = remove;
module.exports.getAll = getAll;
