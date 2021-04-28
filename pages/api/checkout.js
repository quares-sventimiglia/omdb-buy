import mercadopago from "mercadopago";
import "dotenv/config"

export default async function (req, res) {
  const { title, year, plot, image } = req.body;

  console.log("PROCESO", process.env.NODE_ENV)

  const environment = (process.env.NODE_ENV === "development" ? "localhost:3000" : "omdb-buy.vercel.app");

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
      success: `http://${environment}/success`,
      failure: `http://${environment}/failure`,
      pending: `http://${environment}/pending`,
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
