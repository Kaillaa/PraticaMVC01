import mysqlPool from "../config/mySqlConnect.js";

const tableParticipantes = `
  CREATE TABLE IF NOT EXISTS palestrante (
    participanteId VARCHAR(255) NOT NULL PRIMARY KEY,
    eventoId VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (eventoId) REFERENCES evento(eventoId)
  )
`;

mysqlPool.query(tableParticipantes, (err) => {
  if (err) throw err;
  console.log("Tabela Participante criada!");
});
