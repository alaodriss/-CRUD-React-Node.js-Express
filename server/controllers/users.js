import { v4 as uuid } from "uuid";

let users = [];

// Get All Users 
export const getUsers = (req, res) => {
  res.send(users);
};

// Create new element
export const createUsers = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid() });
  res.send("users add Successfuly");
};

// get User By id
export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

// deleted
export const deleteUser = (req, res) => {
   users = users.filter((user) => user.id !== req.params.id);
  res.send("User Deleted Succesully");
};

// update User by id

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact

   res.send("User updated Succesully");
 };