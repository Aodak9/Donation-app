import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const Project = sequelize.define('projects', {
    total:{
        type: DataTypes.INTEGER
    },
},{
    timestamps: false
})