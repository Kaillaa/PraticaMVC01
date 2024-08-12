import { Router } from "express";
import { criarPalestrante, getPalestrantes } from "../controllers/eventoController.js";

const router = Router();

// Rota para criar um novo palestrante
router.post("/palestrantes", criarPalestrante);

// Rota para listar todos os palestrantes
router.get("/palestrantes", getPalestrantes);

export { router };
