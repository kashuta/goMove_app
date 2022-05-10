'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        }
    }

    Post.init({
        title: DataTypes.TEXT,
        body: DataTypes.TEXT,
        imagePost: DataTypes.STRING,
        tag: DataTypes.TEXT,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Post',
    });
    return Post;
};
