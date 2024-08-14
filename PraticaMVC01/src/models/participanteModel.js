import mysqlPool from "../config/mySqlConnect.js";

const tableParticipantes = `
CREATE TABLE IF NOT EXISTS participante (
  eventoId INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  participanteId VARCHAR(255) NOT NULL,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (eventoId) REFERENCES evento(eventoId)
    ON DELETE CASCADE
)`;

mysqlPool.query(tableParticipantes, (err) => {
  if (err) throw err;
  console.log("Tabela Participante criada com sucesso!");
});

