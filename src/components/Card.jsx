import { useDispatch } from 'react-redux';
import Sun_img from '../images/Sun.svg';
import Cloud_img from '../images/Cloud.svg';
import Rain_img from '../images/Rain.svg';
import Snow_img from '../images/Snow.svg';
import { fetchCity } from '../reducers/weather/actions';
import { useState } from 'react';

export const Card = ({weather, main, wind, color}) => { 

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('');

    let img = '';

    switch(weather.main) {
        case 'Clear':
        img = Sun_img;
        break;
        case 'Rain':
        img = Rain_img;
        break;
        case 'Snow':
        img = Snow_img;
        break;
        case 'Clouds':
        img = Cloud_img;
        break;
        default:
        console.log('hello')
    }

    return (
        <div className={`w-[560px] h-[600px] bg-white rounded-[30px] self-center shadow-2xl ${color.text_color} ease-in-out`}>
            <div className='w-10/12 mx-auto pt-5'>
                <div className='relative'>
                    <input 
                    placeholder="Choose your location..." 
                    className={`text-white placeholder-white ${color.background_color} rounded-[20px] h-[60px] w-full pl-12 mt-0 focus:outline-none text-lg ease-in-out`}
                    onKeyDown={(e) => e.key === 'Enter' ? dispatch(fetchCity(e.target.value)) : ''}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' ? dispatch(fetchCity(inputValue)) : ''}
                    />
                    <div className='absolute top-[17px] left-5'>
                        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.4114 25.8684L10.4143 25.8669L10.4214 25.8619L10.4429 25.8453L10.5271 25.7839C10.5986 25.7304 10.7029 25.6524 10.8343 25.5499C11.0971 25.3462 11.47 25.0465 11.915 24.6615C13.0832 23.6519 14.1754 22.5559 15.1829 21.3826C17.5457 18.6193 20 14.6751 20 10.1662C20 7.47227 18.9471 4.88666 17.0729 2.97995C16.1465 2.03627 15.0446 1.28716 13.8308 0.775737C12.6169 0.264315 11.315 0.000677701 10 0C8.68504 0.000583094 7.38317 0.264106 6.16932 0.775404C4.95547 1.2867 3.85361 2.03568 2.92714 2.97923C1.05102 4.89029 -0.0012593 7.4742 1.13101e-06 10.1669C1.13101e-06 14.6751 2.45429 18.6193 4.81714 21.3826C5.82455 22.5559 6.91685 23.6519 8.085 24.6615C8.53072 25.0465 8.90286 25.3462 9.16572 25.5499C9.29464 25.6503 9.42489 25.749 9.55643 25.846L9.57929 25.8619L9.58572 25.8669L9.58857 25.8684C9.835 26.0439 10.165 26.0439 10.4114 25.8684ZM13.5714 10.1113C13.5714 11.0691 13.1952 11.9876 12.5254 12.6648C11.8556 13.342 10.9472 13.7225 10 13.7225C9.0528 13.7225 8.14439 13.342 7.47462 12.6648C6.80485 11.9876 6.42857 11.0691 6.42857 10.1113C6.42857 9.15358 6.80485 8.23506 7.47462 7.55783C8.14439 6.8806 9.0528 6.50014 10 6.50014C10.9472 6.50014 11.8556 6.8806 12.5254 7.55783C13.1952 8.23506 13.5714 9.15358 13.5714 10.1113Z" fill="white"/></svg>
                    </div>
                    <button className='absolute top-[20px] right-5 pointer'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0682 19.6871L11.7045 13.3144C11.1364 13.7696 10.483 14.1299 9.74432 14.3954C9.00568 14.661 8.2197 14.7937 7.38636 14.7937C5.32197 14.7937 3.575 14.0776 2.14545 12.6452C0.715909 11.2129 0.000757576 9.46344 0 7.39687C0 5.32954 0.715152 3.58009 2.14545 2.14851C3.57576 0.716927 5.32273 0.000758653 7.38636 0C9.45076 0 11.1977 0.716169 12.6273 2.14851C14.0568 3.58084 14.772 5.3303 14.7727 7.39687C14.7727 8.23139 14.6402 9.01849 14.375 9.75818C14.1098 10.4979 13.75 11.1522 13.2955 11.7212L19.6875 18.1223C19.8958 18.331 20 18.587 20 18.8905C20 19.1939 19.8864 19.4595 19.6591 19.6871C19.4508 19.8957 19.1856 20 18.8636 20C18.5417 20 18.2765 19.8957 18.0682 19.6871ZM7.38636 12.5178C8.80682 12.5178 10.0144 12.0197 11.0091 11.0236C12.0038 10.0275 12.5008 8.81859 12.5 7.39687C12.5 5.97439 12.0027 4.7651 11.008 3.76899C10.0133 2.77288 8.80606 2.2752 7.38636 2.27596C5.96591 2.27596 4.75833 2.77402 3.76364 3.77013C2.76894 4.76624 2.27197 5.97515 2.27273 7.39687C2.27273 8.81934 2.77008 10.0286 3.76477 11.0247C4.75947 12.0209 5.96667 12.5185 7.38636 12.5178Z" fill="white"/></svg>
                    </button>
                </div>
                <img src={img} className='mt-5 mx-auto ease-in-out'></img>
                <div>
                    <div className='flex mt-3 w-fit mx-auto'>    
                        <h1 className='text-6xl w-fit font-bold pl-5'>{main.temp.toFixed(0) - 273}</h1>
                        <p className='text-xl w-fit font-semibold'>°C</p>
                    </div>
                    <p className='text-xl w-fit mx-auto'>{weather.description}</p>
                </div>
                <div className='flex justify-between mt-10'>
                    <div className='flex gap-2'>
                        <div className='self-center'>
                            <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 30C9.03646 30 6.08698 28.7895 3.65156 26.3684C1.21615 23.9474 -0.001041 21 6.68021e-07 17.5263C6.68021e-07 15.8684 0.319271 14.2832 0.957813 12.7705C1.59635 11.2579 2.50104 9.92211 3.67188 8.76316L12.5 0L21.3281 8.76316C22.5 9.92105 23.4052 11.2568 24.0437 12.7705C24.6823 14.2842 25.001 15.8695 25 17.5263C25 21 23.7828 23.9474 21.3484 26.3684C18.9141 28.7895 15.9646 30 12.5 30Z" 
                            fill={`${color.color_img}`}/></svg>
                        </div>
                        <div>
                            <p>{main.humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='self-center'>
                            <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 36C7.23333 36 4.87467 35.0247 2.924 33.074C0.973334 31.1233 -0.00133197 28.7653 1.36612e-06 26C1.36612e-06 24.4 0.350001 22.908 1.05 21.524C1.75 20.14 2.73333 18.9653 4 18V6C4 4.33333 4.58333 2.91667 5.75 1.75C6.91667 0.583333 8.33333 0 10 0C11.6667 0 13.0833 0.583333 14.25 1.75C15.4167 2.91667 16 4.33333 16 6V18C17.2667 18.9667 18.25 20.142 18.95 21.526C19.65 22.91 20 24.4013 20 26C20 28.7667 19.0247 31.1253 17.074 33.076C15.1233 35.0267 12.7653 36.0013 10 36ZM8 14H12V6C12 5.43333 11.808 4.958 11.424 4.574C11.04 4.19 10.5653 3.99867 10 4C9.43333 4 8.958 4.192 8.574 4.576C8.19 4.96 7.99867 5.43467 8 6V14Z" 
                            fill={`${color.color_img}`}/></svg>
                        </div>
                        <div>
                            <p>{main.feels_like.toFixed(0) - 273}°C</p>
                            <p>Feels like</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='self-center'>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6253 2.5C10.1932 2.49985 9.77432 2.64893 9.43949 2.92203C9.10466 3.19512 8.87443 3.57547 8.78772 3.99875C8.75497 4.15962 8.69086 4.31246 8.59904 4.44855C8.50722 4.58465 8.38949 4.70132 8.25258 4.79192C8.11567 4.88251 7.96225 4.94525 7.80109 4.97656C7.63993 5.00787 7.47418 5.00712 7.31331 4.97438C7.15244 4.94163 6.99959 4.87751 6.86349 4.7857C6.7274 4.69388 6.61072 4.57615 6.52012 4.43925C6.42953 4.30234 6.36678 4.14893 6.33548 3.98777C6.30417 3.82661 6.30491 3.66087 6.33766 3.5C6.50322 2.68895 6.89548 1.94151 7.46889 1.34448C8.0423 0.747462 8.77332 0.325361 9.57704 0.127204C10.3808 -0.0709527 11.2242 -0.0370326 12.0094 0.225025C12.7947 0.487082 13.4894 0.966522 14.013 1.60766C14.5367 2.2488 14.8676 3.02533 14.9675 3.84706C15.0674 4.66878 14.9321 5.50199 14.5774 6.2499C14.2226 6.99781 13.663 7.62974 12.9634 8.07228C12.2638 8.51483 11.4531 8.74983 10.6253 8.75H3.7501C3.41857 8.75 3.10062 8.6183 2.86619 8.38388C2.63176 8.14946 2.50006 7.83152 2.50006 7.5C2.50006 7.16848 2.63176 6.85054 2.86619 6.61612C3.10062 6.3817 3.41857 6.25 3.7501 6.25H10.6253C11.1226 6.25 11.5995 6.05246 11.9511 5.70083C12.3028 5.34919 12.5003 4.87228 12.5003 4.375C12.5003 3.87772 12.3028 3.40081 11.9511 3.04917C11.5995 2.69754 11.1226 2.5 10.6253 2.5ZM20.6255 7.5C20.1934 7.49985 19.7746 7.64893 19.4397 7.92203C19.1049 8.19512 18.8747 8.57547 18.788 8.99875C18.7553 9.15962 18.6913 9.31248 18.5995 9.4486C18.5078 9.58473 18.3901 9.70145 18.2533 9.7921C18.1164 9.88275 17.9631 9.94556 17.8019 9.97694C17.6408 10.0083 17.4751 10.0077 17.3142 9.975C17.1533 9.94233 17.0005 9.8783 16.8643 9.78656C16.7282 9.69482 16.6115 9.57716 16.5208 9.44031C16.4302 9.30346 16.3674 9.1501 16.336 8.98897C16.3046 8.82785 16.3052 8.66212 16.3379 8.50125C16.5033 7.69009 16.8953 6.94248 17.4686 6.34527C18.0419 5.74806 18.7729 5.32575 19.5767 5.12742C20.3804 4.92908 21.224 4.96285 22.0093 5.2248C22.7946 5.48675 23.4895 5.96614 24.0132 6.60727C24.537 7.24839 24.868 8.02495 24.968 8.84674C25.0679 9.66852 24.9327 10.5018 24.5779 11.2498C24.2232 11.9978 23.6635 12.6297 22.9639 13.0723C22.2642 13.5149 21.4534 13.7499 20.6255 13.75H1.25003C0.918503 13.75 0.600552 13.6183 0.366126 13.3839C0.131699 13.1495 0 12.8315 0 12.5C0 12.1685 0.131699 11.8505 0.366126 11.6161C0.600552 11.3817 0.918503 11.25 1.25003 11.25H20.6255C21.1228 11.25 21.5997 11.0525 21.9514 10.7008C22.303 10.3492 22.5006 9.87228 22.5006 9.375C22.5006 8.87772 22.303 8.40081 21.9514 8.04917C21.5997 7.69754 21.1228 7.5 20.6255 7.5ZM13.7878 21.0013C13.859 21.3487 14.0273 21.6689 14.2732 21.9246C14.519 22.1803 14.8323 22.361 15.1768 22.4457C15.5212 22.5304 15.8826 22.5158 16.219 22.4033C16.5554 22.2909 16.8531 22.0854 17.0774 21.8106C17.3017 21.5358 17.4434 21.2031 17.4861 20.8509C17.5289 20.4988 17.4709 20.1418 17.3188 19.8214C17.1668 19.5009 16.927 19.2301 16.6272 19.0405C16.3275 18.8508 15.9801 18.7501 15.6254 18.75H7.50019C7.16866 18.75 6.85071 18.6183 6.61628 18.3839C6.38186 18.1495 6.25016 17.8315 6.25016 17.5C6.25016 17.1685 6.38186 16.8505 6.61628 16.6161C6.85071 16.3817 7.16866 16.25 7.50019 16.25H15.6254C16.4533 16.2501 17.2641 16.4851 17.9637 16.9277C18.6634 17.3703 19.2231 18.0022 19.5778 18.7502C19.9326 19.4982 20.0678 20.3315 19.9679 21.1533C19.8679 21.975 19.5368 22.7516 19.0131 23.3927C18.4894 24.0339 17.7945 24.5132 17.0092 24.7752C16.2238 25.0371 15.3803 25.0709 14.5766 24.8726C13.7728 24.6742 13.0418 24.2519 12.4685 23.6547C11.8952 23.0575 11.5031 22.3099 11.3378 21.4987C11.2718 21.1739 11.3376 20.8361 11.5207 20.5597C11.7038 20.2833 11.9892 20.091 12.3141 20.025C12.639 19.959 12.9768 20.0248 13.2531 20.2079C13.5295 20.391 13.7219 20.6764 13.7878 21.0013Z" 
                            fill={`${color.color_img}`}/></svg>
                        </div>
                        <div>
                            <p>{wind.speed.toFixed(1)}Km/h</p>
                            <p>WindSpeed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}