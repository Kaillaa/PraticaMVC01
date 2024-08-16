import mysqlPool from '../config/mySqlConnect.js';
import { v4 as uuidv4 } from 'uuid';

// Registrar um novo participante
export const registrarParticipante = (req, res) => {
  const { nome, email,eventoId } = req.body;
  const id = uuidv4();

  if (!nome || !email) {
    return res.status(400).json({ message: 'Nome e email são obrigatórios!' });
  }

  const query = `INSERT INTO participante (participanteId, eventoId, nome, email) VALUES ("${id}",${eventoId},"${nome}", "${email}")`;
  mysqlPool.query(query, (error) => {
    if (error) {
      console.error('Erro ao registrar participante2:', error);
      return res.status(500).json({ message: 'Erro ao registrar participante!' + error});
    }
    res.status(201).json({ message: 'Participante registrado com sucesso!' });
  });
};


// Inscrever um participante em um evento
export const inscreverParticipante = (req, res) => {
  const { participanteId, eventoId } = req.body;

  const query = 'INSERT INTO participante (participanteId, eventoId) VALUES (?, ?)';
  mysqlPool.query(query, [participanteId, eventoId], (error) => {
    if (error) {
      return res.status(500).json({ message: 'Erro ao inscrever participante no evento!' + error });
    }
    res.status(201).json({ message: 'Participante inscrito no evento com sucesso!' });
  });
};

// Enviar feedback sobre um evento
export const enviarFeedback = (req, res) => {
  const { participanteId, eventoId, notaFeedback, comentarioFeedBack } = req.body;
  const id = uuidv4();

  if (!participanteId || !eventoId || !notaFeedback || !comentarioFeedBack) {
    return res.status(400).json({ message: 'Dados de feedback incompletos!' + error});
  }

  const query = `INSERT INTO feedback (participanteId, eventoId, notaFeedback, comentarioFeedBack) VALUES (?, ?, ?, ?)`;
  mysqlPool.query(query, [id, participanteId, eventoId, notaFeedback, comentarioFeedBack], (error) => {
    if (error) {
      return res.status(500).json({ message: 'Erro ao enviar feedback!' + error });
    }
    res.status(201).json({ message: 'Feedback enviado com sucesso!' });
  });
};



