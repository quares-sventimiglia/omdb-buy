import mercadopago from "mercadopago";
import "dotenv/config"

export default async function (req, res) {
  const { title, year, plot, image } = req.body;

  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN,
    integrator_id: process.env.INTEGRATOR_ID
  });

  const preference = {
    items: [
      {
        id: 1234,
        description: plot,
        title: title,
        unit_price: Number(year),
        quantity: 1,
        picture_url: image,
      },
    ],
    payer: {
      name: "Lucas",
      surname: "Lacquaniti",
      email: "lacquatnovic@novic.com",
    },
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      res.status(200).json(response.body);
    })
    .catch((error) => {
      console.log(error);
    });
}
