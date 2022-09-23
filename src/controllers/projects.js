import { Project } from "../models/Project.js";

export const getProject = async ( req, res ) => {
    try {
        const { id } = req.params
        const projects = await Project.findByPk(id, {attributes: ['total']})
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const postProject = async ( req, res ) => {
    try {
        const projects = await Project.create(req.body)
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const putProject = async ( req, res ) => {
    try {
        const {id} = req.params
        const { total } = req.body
        const projects = await Project.findByPk(id)
        projects.total = projects.total + total
        projects.save()
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteProject = async ( req, res ) => {
    try {
        const {id} = req.params
        const projects = await Project.destroy({
            where:{
                id
            }
        })
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json(error)
    }
}


