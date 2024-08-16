import mysqlPool from "../config/mySqlConnect.js";

const tableFeedback = `
CREATE TABLE IF NOT EXISTS feedback (
  eventoId INT AUTO_INCREMENT NOT NULL,
  participanteId VARCHAR(255) NOT NULL,
  notaFeedback INT,
  comentarioFeedBack VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

mysqlPool.query(tableFeedback, (err) => {
  if (err) throw err;
  console.log("Tabela Feedback criada com sucesso!");
});

