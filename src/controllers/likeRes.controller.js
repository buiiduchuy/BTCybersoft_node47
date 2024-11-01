import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const likeResByResId = async (req, res) => {
    try {
        let {res_id} = req.params;
        let likeRes = await model.rate_res.findAll({
            where: {
                res_id
            }
        })
        return res.status(200).json(likeRes);
    } catch (error) {
        return res.status(500).json({message: "Internal server"});
    }
}

const likeResByUserId = async (req, res) => {
    try {
        let {user_id} = req.params;
        let likeRes = await model.rate_res.findAll({
            where: {
                user_id
            }
        })
        return res.status(200).json(likeRes);
    } catch (error) {
        return res.status(500).json({message: "Internal server"});
    }
}

const likeRes = async (req, res) => {
    try {
        let {user_id,res_id} = req.body
        console.log("res_id: ", res_id);
        await model.like_res.create({
            user_id,
            res_id
        })
        return res.status(200).json({message: "likeRes"});
    } catch (error) {
        return res.status(500).json({message: "Internal server"})
    }
}

const dislikeRes = async(req, res) => {
    try {
        let {res_id,user_id} = req.params
        await model.like_res.destroy({
            where: {
                res_id,
                user_id
            }
        })
        return res.status(200).json({message: "dislike successsfully"});
    } catch (error) {
        return res.status(500).json({message: "Internal server"})
    }
}

export {
    likeResByResId,
    likeResByUserId,
    likeRes,
    dislikeRes,
}