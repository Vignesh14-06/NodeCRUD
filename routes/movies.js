import express from "express"
import { movieById, movieCreate, movieDelete, movieIndex, movieUpdate } from "../controllers/movie.controller.js"

const router = express.Router()

// crud functionality of movies
//get all
router.get('/',movieIndex)
//get by id
router.get('/:id',movieById)

//post
router.post('/',movieCreate)
//put
router.put('/:id',movieUpdate)
//delete
router.delete('/:id',movieDelete)

export default router