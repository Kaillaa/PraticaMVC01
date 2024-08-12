import mysqlPool from "../config/mySqlConnect.js";
import { v4 as uuidv4 } from "uuid";


//Criar Palestrante
export const criarPalestrante = (req, res) => {
  const { nome, expertise } = req.body;
  const id = uuidv4();

  if (!nome || !expertise) {
    return res.status(400).json({ message: "Nome e expertise são obrigatórios!" });
  }

  const query = "INSERT INTO palestrante (id, nome, expertise) VALUES (?, ?, ?)";
  mysqlPool.query(query, [id, nome, expertise], (error) => {
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
