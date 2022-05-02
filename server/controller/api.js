const axios = require('axios')

class ApiData {
    async home(req, res) {

        try {
            const response = await axios(
                `https://www.numbeo.com/api/cities?api_key=${process.env.API_KEY_NUM}`
            );

            const result = response.data.cities.map((el) => ({
                id: el.city_id,
                city: el.city,
                country: el.country,
            }));
            res.json(result);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    }

    async price(req, res) {


        try {
            const {city, country} = req.body;
            console.log(req.body);
            const response = await axios(
                `https://www.numbeo.com//api/city_prices?api_key=${process.env.API_KEY_NUM}&city=${city}&country=${country}`
            );


            const result = response.data.prices.map((el) => ({
                id: el.item_id,
                name: el.item_name,
                price: el.average_price,

            }));

            res.json(result);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    }


}

module.exports = new ApiData();

// https://www.numbeo.com//api/city_prices?api_key=${process.env.API_KEY_NUM}&city=${city}&country=${country}
// https://www.numbeo.com/api/city_prices?api_key=omjk9aakst2wko&city=Abelessa&country=Algeria
// https://www.numbeo.com/api/cities?api_key=omjk9aakst2wko


// https://www.numbeo.com//api/city_prices?api_key=omjk9aakst2wko&city=Belgrade&country=Serbia
