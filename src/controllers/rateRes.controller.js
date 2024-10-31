import connect from "../../db.js";

import initModels from "../models/init-models.js";
import sequelize from "../routes/connect.js";

// tạo object model đại diện cho tất cả model của orm
const model = initModels(sequelize);


const rateResByRes = async (req, res) => {
    try {
        let {res_id} = req.params
        let data = await model.like_res.findOne({
            where: {res_id}
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({message: "get rate res fail"})
    }
}

const rateResByUser = async (req, res) => {
    try {
        let {user_id} = req.params
        let data = await model.like_res.findOne({
            where: {user_id}
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({message: "get rate res fail"})
    }
}

const rateRes = (req, res) => {
    return res.status(200).json({message: "rateRes"});
}

export {
    rateResByRes,
    rateResByUser,
    rateRes,
}