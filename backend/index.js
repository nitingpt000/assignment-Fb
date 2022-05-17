import express, { urlencoded } from "express";
import Joi from "joi";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// getting movies data from json file
const moviesData = JSON.parse(fs.readFileSync("movies.json", "utf8"));
// validating the data
const validate = (req) => {
  const schema = Joi.object({
    movieName: Joi.string().required(),
    movieRating: Joi.number().required(),
    movieDate: Joi.date().required(),
  });
  return schema.validate(req);
};

/*
 * @description: getting the response
 * @param: none
 * @return: simple object
 */
app.get("/", (req, res) => {
  res.status(200).send("Api is working");
});
/*
 * @description: getting the movies data from json file
 * @param: none
 * @return: movies data
 */
app.get("/api/v1/movies", (req, res) => {
  res.status(200).send(moviesData);
});

/*
 * @type: post
 * @description: adding the movie data to json file
 * @param: movie data
 * @return: none
 */
app.post("/api/v1/movies", (req, res) => {
  const { error } = validate(req.body);
  console.log(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  res.status(201).send({ ...req.body });
});

// listening to the port
app.listen(3001, () => {
  console.log("server is running on port 3001");
});
