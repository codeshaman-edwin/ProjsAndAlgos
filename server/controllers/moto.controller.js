import Moto from '../models/moto.model.js';
// create new
async function createMoto(req, res) {
    try {
        const newMoto = await Moto.create(req.body);
        res.json(newMoto);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function getAllMotos(req, res) {
    try {
        const allMotos = await Moto.find(); // here is our query to find Users
        res.json(allMotos);
    } catch (error) {
        console.log(error);
        res.status(400).json(error); // here is our error response
    }
}

async function getOneMoto(req, res) {
    try {
        const foundMoto = await Moto.findById(req.params.id);
        res.json(foundMoto);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function updateOneMoto(req, res) {
    const options = {
        new: true,
        runValidators: true,
    };
    try {
        const updatedMoto = await Moto.findByIdAndUpdate(req.params.id, req.body, options);
        res.json(updatedMoto);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function deleteOneMoto(req, res) {
    try {
        const deletedMoto = await Moto.findByIdAndDelete(req.params.id);
        res.json(deletedMoto);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}



export {
    createMoto,
    getAllMotos,
    getOneMoto,
    updateOneMoto,
    deleteOneMoto
};

