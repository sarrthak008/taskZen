import User from "../models/user.model.js"
import Todos from "../models/todo.model.js"

const addTodo = async (req, res) => {
    try {

        // let { userid } = req.params
        let userid = req.userId
        let { toDotitle, toDodosdecription } = req.body
        if (!toDotitle || !toDodosdecription || !userid) {
            return res.json({
                data: null,
                message: "all fields are required"
            })
        }
        let findedUserId = await User.findById(userid).select("_id")
        // console.log(findedUserId)
        if (!findedUserId) {
            return res.json({
                data: null,
                message: "something went wrong"
            })
        }

        let createdTodo = await Todos.create({
            toDotitle: toDotitle,
            toDodosdecription: toDodosdecription,
            user: findedUserId._id
        })

        let savedTodo = await createdTodo.save()

        if (!savedTodo) {
            return res.json({
                data: null,
                message: "something went wrong"
            })
        }

        return res.json({
            data: savedTodo,
            message: "todo added successfully"
        })

    } catch (error) {
        // console.log(error)
        return res.json({
            data: null,
            message: error.message
        })
    }
}

const getTodo = async (req, res) => {
    try {
        // let { userid } = req.params
        let userid = req.userId

        if (!userid) {
            return res.json({
                data: null,
                message: "please check url"

            })
        }

        let usersDoto = await Todos.find({ user: userid })
        if (!usersDoto) {
            return res.json({
                data: null,
                message: "something went wrong"

            })
        }

        return res.json({
            data: usersDoto,
            message: "todo fetched successfully"
        })


    } catch (error) {
        return res.json({
            data: null,
            message: error.message
        })
    }
}

const updateToDoSts = async (req,res) => {
    try {
        let { todoid } = req.params
        if (!todoid) {
            return res.json({
                data: null,
                message: "please check url"
            })
        }

        let findedTodo = await Todos.findById(todoid)
        // findedTodo.status === "incomplete" ? findedTodo.status = "complete" : findedTodo.status = "incomplete"

        if (findedTodo.status === "incomplete") {
            findedTodo.status = "complete"
        } else {
            findedTodo.status = "incomplete"
        }

        await findedTodo.save()

        return res.json({
            data: null,
            message: `status updated successfully,now status ${findedTodo.status}`
        })


    } catch (error) {
        return res.json({
            data: null,
            message: error.message
        })
    }
}


export { addTodo, getTodo, updateToDoSts }
