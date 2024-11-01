import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const order = async(req, res) => {
    try {
        let {food_id,user_id,amount} = req.body
        console.log("food_id: ", food_id);
        await model.orders.create({
            food_id,
            user_id,
            amount
        })
        return res.status(200).json({message: "order"});
    } catch (error) {
        return res.status(500).json({message: "order fail"});        
    }
}

export {
    order,
}