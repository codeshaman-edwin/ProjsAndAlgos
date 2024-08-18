import {model, Schema} from 'mongoose';
const MotoSchema = new Schema(
    {
        make: {
            type: String,
            required: [true, "Make is required!"],
            minlength: [3, "Make must be at least 3 characters long!"],
            maxlength: [20, "Make must be at most 20 characters long"]
        },
        model: {
            type: String,
            required: [true, "Model is required!"],
            minlength: [3, "Model must be at least 3 characters long!"],
            maxlength: [20, "Model must be at most 20 characters long"] // UNCOMMENT AND TEST !!!!!!!!!!!!!!!!!!!!!!!!
        },
        year: {
            type: Number,
            required: [true, "Year is required!"],
            min: [1885, "Year must be at least 1885!"],
            max: [2025, "Year must be at most 2025!"]
        }
    },
    { timestamps: true }
);
const Moto = model("Moto", MotoSchema);
export default Moto;
