import mysqlPool from "../config/mySqlConnect.js";

const tabelaEventos = `
CREATE TABLE IF NOT EXISTS evento (
  eventoId INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  palestranteId VARCHAR(255) NOT NULL,
  tituloEvento VARCHAR(255) NOT NULL,
  data DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

mysqlPool.query(tabelaEventos, (err) => {
  if (err) throw err;
  console.log("Tabela Evento criada com sucesso!");
});
