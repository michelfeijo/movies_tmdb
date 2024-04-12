// INPORTA A CONEXÃO COM O BANCO
// import db from "../db/dbConnect.js";
import dotenv from "dotenv";
dotenv.config();



async function updateMovie(req, res) {
    
    try {
        const movieInfo = req.body
        // const conn = await db.connect();
        const sqlFavorite = `UPDATE MOVIE SET IS_FAVORITE = ? WHERE ID = ?`;
        const sqlWatched = `UPDATE MOVIE SET IS_WATCHED = ? WHERE ID = ?`;
        // console.log(req.body);
        
        try {
            if(movieInfo.isFavorite) {
                console.log('favoritou');
                // await db.execute(conn, sqlFavorite, [movieInfo.isFavorite, movieInfo.id]);
            }
    
            if (movieInfo.isWatched) {
                console.log('assistiu');
                // await db.execute(conn, sqlWatched, [movieInfo.isWatched, movieInfo.id]);
            }

        } catch(error) {
            console.log(error);
        }


    } catch (error){
        console.log("Tipo do erro: ",error);
    }
}

export default updateMovie;