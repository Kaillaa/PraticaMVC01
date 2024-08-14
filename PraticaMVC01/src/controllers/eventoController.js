import mysqlPool from "../config/mySqlConnect.js";
import { v4 as uuidv4 } from "uuid";


//Criar Palestrante
export const criarPalestrante = (req, res) => {
  const { nome, expertise } = req.body;
  const id = uuidv4();

  if (!nome || !expertise) {
    return res.status(400).json({ message: "Nome e expertise são obrigatórios!" });
  }

  const query = `INSERT INTO palestrante (id, nome, expertise) VALUES ("${id}", "${nome}", "${expertise}")`;
  mysqlPool.query(query , (error) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao criar palestrante!" });
    }
    res.status(201).json({ message: "Palestrante criado com sucesso!" });
  });
};

//Buscar Palestrantes
export const getPalestrantes= (req, res) => {
  const query = "SELECT * FROM palestrante";
  mysqlPool.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ message: "Erro ao recuperar palestrantes!" });
    }
    res.status(200).json(results);
  });
};


// Criar um novo evento DIA 02
export const criarEvento = (req, res) => {
  const { palestrantesId, tituloEvento, data} = req.body;


  if (!tituloEvento || !data) {
    return res.status(400).json({ message: "titulo Evento e data são obrigatórios!" });
  }

  console.log(data,palestrantesId,tituloEvento)
  const query = `INSERT INTO evento ( tituloEvento, data) VALUES ( "${tituloEvento}", "${data}")`;
  mysqlPool.query(query, (error) => {
    if (error) {
      return res.status(501).json({ message: "Erro ao criar evento!"  + error});
    }
    res.status(201).json({ message: "Evento criado com sucesso!" });
  });
};

// Listar todos os eventos com detalhes dos palestrantes
export const listarEventos = (req, res) => {
  const query = `
    SELECT e.id, e.titulo, e.data, GROUP_CONCAT(p.nome) AS palestrantes
    FROM evento e
    LEFT JOIN evento_palestrante ep ON e.id = ep.evento_id
    LEFT JOIN palestrante p ON ep.palestrante_id = p.id
    GROUP BY e.id
  `;
  
  mysqlPool.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Erro ao listar eventos!' });
    }
    res.status(200).json(results);
  });
};

