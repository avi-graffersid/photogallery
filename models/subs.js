module.exports = (sequelize,DataTypes) =>{
    const subs = sequelize.define("subs",{
        sid:{
        type: DataTypes.INTEGER
            },
        texto:{
            type: DataTypes.STRING
             }
    });
    return subs; 
}  