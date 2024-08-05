const { DietPlan } = require("../../database/models/index");


const AddDietPlan = async (req, res, next) => {
    const { uuid, dietName, dietDescription, nutrition } = req.body;
    const user_id = req.body.user_id || null;

    const data = { uuid, dietName, dietDescription, nutrition, user_id }
    try {
        const dietPlan = await DietPlan.create(data);
        res.status(200).json(dietPlan);
    } catch (error) {
        next(error);
        console.log(error);
    }
}


const GetDietPlan = async (req, res, next) => {
    try {
        const data = await DietPlan.findAll();
        res.send(data);
    } catch (error) {
        next(error);
        console.log(error);
    }
}


const GetDietPlanById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const dietPlan = await DietPlan.findOne({
            where: {
                id: id,
            },
            cascade: false,
        });
        res.status(200).json(dietPlan);
    } catch (error) {
        next(error);
        console.log(error);
    }
}


const GetDietPlanByUserId = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    try {
        const dietPlan = await DietPlan.findAll({
            where: {
                user_id: id,
            },
            cascade: false,
        });
        res.status(200).json(dietPlan);
    } catch (error) {
        next(error);
        console.log(error);
    }
}


const DeleteDietPlan = async (req, res, next) => {
    const id = req.params.id;
    try {
        const dietPlan = await DietPlan.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json(dietPlan);
    } catch (error) {
        next(error);
        console.log(error);
    }
}


const UpdateDietPlan = async (req, res, next) => {
    const id = req.params.id;
    const { uuid, dietName, dietDescription, nutrition } = req.body;
    const user_id = req.body.user_id || null;
    const data = { uuid, dietName, dietDescription, nutrition, user_id }
    try {
        const dietPlan = await DietPlan.update(data, {
            where: {
                id: id,
            },
        });
        res.status(200).json(dietPlan);
    } catch (error) {
        next(error);
        console.log(error);
    }
}


module.exports = {
    AddDietPlan,
    GetDietPlan,
    GetDietPlanById,
    GetDietPlanByUserId,
    DeleteDietPlan,
    UpdateDietPlan
};
