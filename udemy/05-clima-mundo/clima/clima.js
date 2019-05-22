const axios = require('axios');




const getClima = async (lat, long) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=96acd61faca00c365d926f2b411bd19c&units=metric`);

    return resp.data.main.temp;
}





module.exports = {
    getClima
}