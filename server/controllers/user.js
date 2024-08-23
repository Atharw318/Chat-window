import { User } from "../models/user.js";

//Create new User:-
const newUser = async (req, res) => {
  const { name, username, password, bio } = req.body;

  const avatar = {
    public_id: "ahsahsaj",
    url: "ksjnfkdfwfsvkjfd",
  };

  await User.create({
    name,
    username,
    password,
    bio,
    avatar,
  });

  res.status(201).json({
    message: "User Created successfully",
  });
};

const login = (req, res) => {
  res.send("Hye from server");
};

export { login, newUser };
