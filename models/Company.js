module.exports = (sequelize,DataTypes) =>{
    const Company = sequelize.define("Company",{
        cid:{
        type: DataTypes.INTEGER
            },
        name:{
            type: DataTypes.STRING
             }
    });
    return Company; 
}  