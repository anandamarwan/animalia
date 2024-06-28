import { Hono } from "hono";
import { dataAnimals } from "./data/animal";

let animals = dataAnimals;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Animals API",
    animals: "/animals/:id",
  });
});

app.get("/animals", (c) => {
  return c.json(animals);
});

app.get("/animals/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      massage: "There is no Id",
    });
  }

  const animal = animals.find((animal) => animal.id == id);

  if (!animal) {
    return c.json({
      massage: "There is no animal",
    });
  }

  return c.json(animal);
});

app.delete("animals", (c) => {
  animals = [];
  return c.json(animals);
});

console.log("👋 Hallo");

export default app;
