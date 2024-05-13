import Axios from "axios";

export default function handler(req, res) {
  Axios.post(process.env.NEXT_PUBLIC_API_KEY + " /auth/login", req.body, {
    headers: {
      "Content-Type": "application/json",
      "Site-Token": "123456",
    },
  })
    .then((respond) => {
      res.status(200).json(respond.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).json(error.response);
    });
}
