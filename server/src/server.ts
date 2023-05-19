import { resolve } from "node:path";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from "./routes/auth";
import { uploadRoutes } from "./routes/upload";
import fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";
import multipart from "@fastify/multipart";
import "dotenv/config";

const app = fastify();

app.register(multipart);

app.register(require("@fastify/static"), {
  root: resolve(__dirname, "../uploads"),
  prefix: "/uploads",
});

app.register(cors, {
  origin: true, // todas as urls poderão acessar o nosso backend
});

app.register(jwt, {
  secret: "spacetime", // maneira de diferenciar os jwt gerados por esse back-end de outros jwt gerados por outros back-ends
});

app.register(authRoutes);
app.register(uploadRoutes);
app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("🚀 HTTP server is running on http://localhost:3333");
  });
