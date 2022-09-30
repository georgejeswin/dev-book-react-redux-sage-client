import { ResponseGenerator } from "../../../interfaces/Response";
import request from "../../request";

function* getAllUsers() {
  try {
    const response: ResponseGenerator = yield request.get(
      `${process.env.REACT_APP_ENTRYPOINT}users`
    );
    return response;
  } catch (error) {
    console.log("Error getting all users", error);
  }
}

const users = {
  getAllUsers,
};

export default users;
