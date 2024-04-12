export default function construir(Obj) {
  return Obj.rows.map((valor) => {
    let newObj = {};
    valor.forEach(
      (item, i) => (newObj = { ...newObj, [Obj.metaData[i].name]: item })
    );
    return newObj;
  });
}
