import { v4 as uuidv4 } from "uuid";

let users = [];
export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.fName} added to the users list`);
};

export const findUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { fName, lName } = req.body;
  const user = users.find((user) => user.id === id);
  if (fName) {
    user.fName = fName;
  }
  if (lName) {
    user.lName = lName;
  }
  res.send(`User with the id ${id} updated `);
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} is deleted`);
};
export const getAllUsers = (req, res) => {
  console.log(users);
  res.send(users);
};
