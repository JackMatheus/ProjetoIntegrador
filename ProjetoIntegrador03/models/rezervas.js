module.exports = (sequelize, DataType) => {
	const Rezerva = sequelize.define(
		'Rezerva',
        //Nome do MODEL no singular que quer conectar - primeiro parametro
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
		Horario: DataType.TIME,
		Data: DataType.DATE,
		Adulto: DataType.INTEGER,
		Crianca: DataType.INTEGER,
		Setor: DataType.STRING,
		CreatedAt: DataType.DATE,
		UpdatedAt: DataType.DATE,
		},{
    tableName: 'rezervas',
    //Nome da tabela para conexão com o banco de dados
	});
	return Rezerva;
};

