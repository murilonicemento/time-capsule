import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import "dotenv/config";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";

const app = fastify();

app.register(cors, {
  origin: true, // todas as urls poderão acessar o nosso backend
});

app.register(jwt, {
  secret: "spacetime", // maneira de diferencia os jwt gerados por esse back-end de outros jwt gerados por outros back-ends
});

app.register(authRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("🚀 HTTP server is running on http://localhost:3333");
  });
