import db from "oracledb";

db.autoCommit = true;

import { owner } from "./connection.js";
/*Mudar Tst para produção!!*/

export default async function db() {  
  const connection = await db.getConnection(owner); //mudar para owner em produção
  await connection.execute(`alter session set nls_date_format = 'DD/MM/YYYY'`);
  return connection;
}
