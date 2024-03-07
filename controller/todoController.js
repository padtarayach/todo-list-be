import { TodoModel } from "../model/todoModel.js";


const todoController = {
    getAll : async (req,res) => {
        try { const todo = await TodoModel.find()
            res.status(200).json(todo)
            
        } catch (error) {
            res.status(500).json(error)  
        }
    },
    getById: async (req,res) => {
        try { const todo = await TodoModel.findById(req.params.id)
            res.status(200).json(todo)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    },
    createTodo: async (req,res) => {
        try {
            const newTodo = await TodoModel.create(req.body)
            res.status(201).json(newTodo)
        } catch (error) {
            res.status(500).json(error)
            
        }
    },
    updateTodo: async (req,res) => {
        try {
            const updateTodo = await TodoModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateTodo)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteTodo: async(req,res) => {
        try {
           await TodoModel.findByIdAndDelete(req.params.id)
           res.status(200).json("delete success")
            
        } catch (error) {
            res.status(500).json(error)
            
        }
    },
    getFinishTodo: async(req,res) => {
        try {
            const finishTodo = await TodoModel.find({status:"finish"}).sort({dueDate:1})
            res.status(200).json(finishTodo)
        } catch (error) {
            res.status(500).json(error)  
        }
    },
    getUnfinishTodo: async(req,res) => {
        try {
            const unfinishTodo = await TodoModel.find({status:{$ne:"finish"}}).sort({dueDate:1})
            res.status(200).json(unfinishTodo)
        } catch (error) {
            res.status(500).json(error)  
        }
    }
    

}

export {todoController}