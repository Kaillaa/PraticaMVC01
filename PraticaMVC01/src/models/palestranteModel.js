import mysqlPool from "../config/mySqlConnect.js";

const tablePalestrantes = `
  CREATE TABLE IF NOT EXISTS palestrante (
    palestranteId VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    expertise VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

mysqlPool.query(tablePalestrantes, (err) => {
  if (err) throw err;
  console.log("Tabela Participante criada!");
});
