import { Request, Response } from "express";
import { handleCreateUser } from "../services/user_service";

const getHomePage = (req: Request, res: Response) => {
  return res.render("homePage");
};
const getCreateUserPage = (req: Request, res: Response) => {
  return res.render("createUser");
};
const postCreateUser = (req: Request, res: Response) => {
  const { email, phone, address, password } = req.body;
  handleCreateUser(email,phone,address,password)
  console.log("email: ", email)
  console.log("password: ",password)
  return res.redirect("/");
};
export { getHomePage, getCreateUserPage, postCreateUser };
