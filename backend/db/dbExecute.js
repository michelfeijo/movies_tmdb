import construir from './helper/buildObject.js'

	 export default async function execute(conn, query, params = []) {
		let result;
		let error
		try {
		  result = await conn.execute(query, params);
	  	  
		  if (query.match(/BEGIN/)) {
			// PROCEDURE
			result = true;		
		  }
		  
		} catch (erro) {
		  console.log(
			`${new Date().toLocaleString('pt-BR') + ' falhou em ' + __dirname
			} \n executando a query:\n ${query}\n ${erro} \n`,
		  );
		  error = erro
		} finally {
		  if (error) throw error
		  if (!result) return false; // CONSULTA NÃO RETORNA DO BANCO OU APRESENTA ERRO
		  if (result.rowsAffected >= 1) return true; //VALIDA SE UPDATE OU DELETE FOI EFETUADO
		  if (result && result.rows === undefined) return true; // PROCEDURE EXECUTADA COM SUCESSO
		  else if (result.rows != '') {//RETORNA LINHAS DO SELECT
			return construir(result);
		  } else {
			return false;
		  }
		}
	  }