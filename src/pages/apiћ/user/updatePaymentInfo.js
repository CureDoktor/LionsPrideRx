import Axios from "axios";

export default function handler(req, res) {
  Axios.post(
    process.env.NEXT_PUBLIC_API_KEY + " /user/payment-info",
    req.body.formData,
    {
      headers: {
        "Content-Type": "application/json",
        "Site-Token": "123456",
        "Authorization": "Bearer " + req.body.Token,
      },
    }
  )
    .then((respond) => {
      return res.status(200).json(respond.data);
    })
    .catch(function (error) {
      console.log(error);
      return res.status(400).json(error.response.data.errors);
    });
}
