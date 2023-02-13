const db = require('../models/quiz');
const Quiz = db.quizzes;


// create new quiz
exports.create = async(req,res) => {
    try{
        const data = await Quiz.create(req, body)
        res.json({
            message: "quiz successfully created",
            data: data,
        })
    }catch (error){
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}

// get all quiz
exports.getAll = async(req,res) => {
    try{
        const quizzes = await Quiz.findAll()
        res.json({
            message: "quiz successfully get all",
            data: quizzes,
        })
    }catch (error){
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}

// change quiz by id
exports.update = async(req,res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "quiz successfully change",
            data: quizzes,
        });
    }catch (error){
        res.status(500).json({
            message: error.message || "some error while updating quiz",
            data: null
        });
    }
}

// delete quiz by id
exports.delete = async(req,res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.destroy()
        res.json({
            message: "quiz successfully deleted",
        });
    }catch (error){
        res.status(500).json({
            message: error.message || "some error while updating quiz",
            data: null
        });
    }
}

// get quiz by id 
exports.findOne = async(req,res) => {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `quiz successfully get by id=${id}`,
            data: quiz
        });
    }catch (error){
        res.status(500).json({
            message: error.message || "some error while updating quiz",
            data: null
        });
    }
}

// read or get all quiz with categoryId
exports.getByCategoryId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with categoryId=${id}.`,
        data: quizzes,
    });
}

// read or get all quiz with level
exports.getByLevelId = async (req,res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            levelId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with levelId=${id}.`,
        data: quizzes,
    });
}