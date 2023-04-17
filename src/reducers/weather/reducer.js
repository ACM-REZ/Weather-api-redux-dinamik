const InitialState = {
    loaded: false,
    cityWeather : {
        weather: [
            {
                main: "Clear",
                description: "clear sky",
            }
        ],
        main: {
            temp: null,
            feels_like: null,
            humidity: null,
        },
        wind: {
            speed: null,
        },
        name: "Orenburg",
    }
}

const GET_CITY = "GET_CITY";

export default (state = InitialState, {type, payload}) => {
    switch(type) {
        case GET_CITY: 
            return {
                ...state, 
                cityWeather: {...payload},
                loaded: true
            }
        default:
            return state;
    }
}

export const changeCity = (payload) => ({type: GET_CITY, payload})