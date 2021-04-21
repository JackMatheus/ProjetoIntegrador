module.exports = (sequelize, DataType) => {
	const Usuario = sequelize.define(
		'Usuario', //alt aqui
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
        name: DataType.STRING,
        celular: DataType.INTEGER,
        endereco: DataType.STRING,
        rezervas: DataType.INTEGER,
        email: DataType.STRING,
        password: DataType.STRING,
        
	},{
    tableName: 'usuarios',
	});
	return Usuario;
};