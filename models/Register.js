module.exports = (sequelize,DataTypes) =>{
    const Register = sequelize.define("Register",{
        name:{
        type: DataTypes.STRING
            },
        email:{
        type: DataTypes.STRING
            },   
        age:{
        type: DataTypes.STRING
             },
        password:{
        type: DataTypes.STRING
            },
        //  subscription:{
                //     type: DataTypes.INTEGER
                //      }
    });
    return Register; 
}  