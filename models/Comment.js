module.exports = (sequelize,DataTypes) =>{
    const Comment = sequelize.define("Comment",{
        name:{
            type: DataTypes.STRING
             },
        comment:{
            type: DataTypes.STRING
             }
    });
    return Comment; 
}  