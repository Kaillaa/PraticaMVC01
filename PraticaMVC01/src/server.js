import express from "express";
import dotenv from "dotenv";
import "./models/eventosModel.js";
import "./models/palestranteModel.js";
import "./models/participanteModel.js";
import "./models/feedbackModel.js";
import { router as eventoRoutes } from "./routes/eventoRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3020;

app.use("/eventos", eventoRoutes);

app.get("*", (req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
