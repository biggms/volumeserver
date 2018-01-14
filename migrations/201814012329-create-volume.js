'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Volume', {
            id: {
                type: Sequelize.UUID,
                primaryKey: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            value: {
                type: Sequelize.DOUBLE,
                defaultValue: 0
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            revision: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Volume');
    }
};