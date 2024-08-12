import mysqlPool from "../config/mySqlConnect.js";

const tabelaPalestrante = `
  CREATE TABLE IF NOT EXISTS palestrante (
    id VARCHAR(60) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    expertise VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )
`;

mysqlPool.query(tabelaPalestrante, (err) => {
  if (err) throw err;
  console.log("Tabela Palestrante criada!");
});
