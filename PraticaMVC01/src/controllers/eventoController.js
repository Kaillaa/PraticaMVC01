import mysqlPool from "../config/mySqlConnect.js";
import { v4 as uuidv4 } from "uuid";

// Criar Palestrante
export const criarPalestrante = (req, res) => {
  const { nome, expertise } = req.body;
  const palestranteId = uuidv4();

  if (!nome || !expertise) {
    return res.status(400).json({ message: "Nome e expertise são obrigatórios!" });
  }

  const query = `INSERT INTO palestrante (palestranteId, nome, expertise) VALUES (?, ?, ?)`;
  mysqlPool.query(query, [palestranteId, nome, expertise], (error) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao criar palestrante!" + error });
    }
    res.status(201).json({ message: "Palestrante criado com sucesso!" });
  });
};

// Buscar Palestrantes
export const getPalestrantes = (req, res) => {
  const query = "SELECT * FROM palestrante";
  mysqlPool.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao recuperar palestrantes!" });
    }
    res.status(200).json(results);
  });
};

// Criar um novo evento
export const criarEvento = (req, res) => {
  const { palestranteId, tituloEvento, data } = req.body;

  if (!tituloEvento || !data) {
    return res.status(400).json({ message: "Título do evento e data são obrigatórios!" });
  }

  const query = `INSERT INTO evento (palestranteId, tituloEvento, data) VALUES (?, ?, ?)`;
  mysqlPool.query(query, [palestranteId, tituloEvento, data], (error) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao criar evento!" + error});
    }
    res.status(201).json({ message: "Evento criado com sucesso!" });
  });
};

// // Listar todos os eventos com detalhes dos palestrantes
// export const listarEventos = (req, res) => {
//   const query = `
//     SELECT eventoId, tituloEvento AS titulo, data, GROUP_CONCAT(p.nome) AS palestrantes
//     FROM evento e
//     LEFT JOIN palestrante ep ON e.eventoId = eventoId
//     LEFT JOIN palestrante p ON ep.palestranteId = eventoId
//     GROUP BY eventoId
//   `;
  
//   mysqlPool.query(query, (error, results) => {
//     if (error) {
//       return res.status(500).json({ message: 'Erro ao listar eventos!' + error });
//     }
//     res.status(200).json(results);
//   });
// };

// Listar eventos
export const getEventos = (req, res) => {
  const query = "SELECT * FROM evento";
  mysqlPool.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao recuperar eventos!" + error });
    }
    res.status(200).json(results);
  });
};

//Editar Evento 
export const editar = (req, res) => {

const { tituloEvento, data02, palestranteId } = req.body;

if (!tituloEvento || !data02 || !palestranteId) {
    res.status(500).send({ message: "Todos os campos são obrigatórios" });
    return;
}

const { eventoId } = req.params;
const checkSql = "SELECT * FROM evento WHERE eventoId = ?";
const updateSql = `
  UPDATE evento
  SET tituloEvento = ?,
      data = ?,
      palestranteId = ?
  WHERE eventoId = ?
`;
console.log(eventoId);
mysqlPool.query(checkSql, [eventoId], (err, data) => {
    if (err) {
        res.status(500).json({ message: "Erro ao buscar o evento" });
        return;
    }

    if (data.length === 0) {
        res.status(404).json({ message: "Evento não encontrado" });
        return;
    }
    console.log(data02)
    mysqlPool.query(updateSql, [tituloEvento, data02, palestranteId, eventoId], (err) => {
        if (err) {
            console.log("[EVENTO PUT FAIL] " + err);
            res.status(500).json({ message: "Erro ao atualizar o evento" + err });
        } else {
            res.json({ message: "Evento atualizado" });
        }
    });
})};
 
// Deletar um Evento
export const deletarEvento = (req, res) => {
  const { eventoId } = req.params;
  const query = "DELETE FROM evento WHERE eventoId = ?";

  mysqlPool.query(query, [eventoId], (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao tentar deletar o evento!" + error });
    } else if (results.length === 0) {
      return res.status(404).json({ message: "Evento não encontrado!" + error });
    } else {
      res.status(200).json({ message: "Evento deletado com sucesso!" });
    }
  });
};
