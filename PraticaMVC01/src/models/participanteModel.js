import mysqlPool from "../config/mySqlConnect.js";

const tableParticipantes = `
  CREATE TABLE IF NOT EXISTS participante (
    id VARCHAR(60) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

mysqlPool.query(tableParticipantes, (err) => {
  if (err) throw err;
  console.log("Tabela Participante criada!");
});
