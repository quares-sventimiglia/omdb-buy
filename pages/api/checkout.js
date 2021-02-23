import mercadopago from "mercadopago";

export default async function (req, res) {
  const { title, year, plot, image } = req.body;

  mercadopago.configure({
    access_token:
      "TEST-7835178460898996-022216-012217c509161746d42930f376bf1b2c-709573187",
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
      success: "https://www.tu-sitio/success",
      failure: "http://www.tu-sitio/failure",
      pending: "http://www.tu-sitio/pending",
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
