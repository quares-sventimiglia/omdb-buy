import mercadopago from "mercadopago";

export default async function (req, res) {

	const {title, year} = req.body

  mercadopago.configure({
    access_token:
      "TEST-7835178460898996-022216-012217c509161746d42930f376bf1b2c-709573187",
  });

  let preference = {
    items: [
      {
        title: title,
        unit_price: Number(year),
        quantity: 1,
      },
    ],
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
			res.status(200).json(response.body)
    })
    .catch((error) => {
      console.log(error);
    });
}
