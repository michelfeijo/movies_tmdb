// INPORTA A CONEXÃO COM O BANCO
// import db from "../db/dbConnect.js";
import dotenv from "dotenv";
dotenv.config();



async function WatchMovie(req, res) {
    
    try {

        console.log(res);
        const conn = await db.connect();
        
        const args = {
            id: req.params.id,
            id_user: req.body.id_user,  
            id_movie: req.body.id_movie,                
        }

        const insertDataWatchMovie = `
            INSERT INTO WATCH_MOVIE 
            (
                ID,
                ID_USER,
                ID_MOVIE
            ) VALUES (
                :ID,
                :ID_USER,
                :ID_MOVIE
            )`;

        const successInsert = await db.execute(conn, insertDataWatchMovie, args);
        console.log(successInsert);

    } catch (error){
        console.log("Tipo do erro: ",error);
    }
}

export default WatchMovie;