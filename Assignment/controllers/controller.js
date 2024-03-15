import User from "../models/User.js";

export const getRoute = (req, res) => {
    res.json("Hi")
}

export const createData = async (req, res) => {
    const { name, age, year } = req.body;

    if (!name || !age) {
        return res.json("Please fill all details");
    }

    const newUser = new User({
        name,
        age,
        year
    })
    await newUser.save()

    res.json(newUser);
}

export const getDataRoute = async (req, res) => {
    const data = await User.find();
    res.json(data);
}

export const deleteRoute = async (req, res) => {
    const name = req.params.name;
    if (!name) {
        return res.json("Please provide the name of the user to delete");
    }

    try {
        const deletedUser = await User.findOneAndDelete({ name });

        if (!deletedUser) {
            return res.json("User not found");
        }

        return res.json("User deleted successfully");
    } catch (error) {
        return res.status(500).json({ error: "An error occurred while deleting the user" });
    }
}

export const updateRoute = async (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({ error: "Please provide name and age to update" });
    }

    try {
        const updatedUser = await User.findOneAndUpdate({ name }, { $set: { age } }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
}
