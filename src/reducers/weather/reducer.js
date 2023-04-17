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
        sys: {
            type: 1,
            id: 9044,
            country: "RU",
            sunrise: 1681694402,
            sunset: 1681744688
        },
        id: 515003,
        name: "Orenburg",
    }
}

export default (state = InitialState, {type, payload}) => {
    switch(type) {
        case "GET_CITY": 
            return {
                ...state, 
                cityWeather: {...payload},
                loaded: true
            }
        default:
            return state;
    }
}

export const changeCity = (payload) => ({type: 'GET_CITY', payload})