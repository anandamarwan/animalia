import { Hono } from "hono";
import { dataAnimals } from "./data/animal";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Animals API",
    animals: "/animals/:id",
  });
});

app.get("/animals", (c) => {
  return c.json(dataAnimals);
});

app.get("/animals/:id", (c) => {
  const id = Number(c.req.param("id"));

  if (!id) {
    return c.json({
      massage: "There is no Id",
    });
  }

  const animal = dataAnimals.find((animal) => animal.id == id);

  if (!animal) {
    return c.json({
      massage: "There is no animal",
    });
  }

  return c.json(animal);
});

console.log("👋 Hallo");

export default app;
