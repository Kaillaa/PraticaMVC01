import { Router } from "express";
import { criarPalestrante, getPalestrantes, getEventos, criarEvento, deletarEvento, editar } from "../controllers/eventoController.js";
import { registrarParticipante, inscreverParticipante, enviarFeedback } from '../controllers/participantesController.js';


const router = Router();

// Rota para criar um novo palestrante
router.post("/palestrantes", criarPalestrante);

// Rota para listar todos os palestrantes
router.get("/palestrantes", getPalestrantes);

// Rota para criar um novo evento
router.post('/criar', criarEvento);

// Rota para listar todos os eventos com detalhes dos palestrantes
router.get('/agenda', getEventos);

// Rota para registrar um novo participante
router.post('/registrar', registrarParticipante);

// Rota para inscrever um participante em um evento
router.post('/inscrever', inscreverParticipante);

//  Rota para Deletar evento 
router.delete('/cancelar/:eventoId', deletarEvento);

// Rota para feedback
router.post('/feedback', enviarFeedback)

// Rota editar
router.put('/editar/:eventoId', editar)



export { router };
