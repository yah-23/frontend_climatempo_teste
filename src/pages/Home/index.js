import React from 'react';
import path from 'path';

import './Home.scss';

import { AutoComplete } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

import Card from '../../components/Card';

const fakeData = [
  {
    period: {
      begin: '2017-02-01',
      end: '2017-02-07',
    },
    locale: {
      id: 3735,
      name: 'Osasco',
      state: 'SP',
      latitude: -23.532,
      longitude: -46.792,
    },
    weather: [
      {
        date: '2017-02-01',
        text:
          'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
        temperature: {
          min: 20,
          max: 28,
        },
        rain: {
          probability: 60,
          precipitation: 20,
        },
      },
      {
        date: '2017-02-02',
        text:
          'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
        temperature: {
          min: 21,
          max: 30,
        },
        rain: {
          probability: 60,
          precipitation: 10,
        },
      },
      {
        date: '2017-02-03',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 22,
          max: 31,
        },
        rain: {
          probability: 60,
          precipitation: 15,
        },
      },
      {
        date: '2017-02-04',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 22,
          max: 32,
        },
        rain: {
          probability: 60,
          precipitation: 16,
        },
      },
      {
        date: '2017-02-05',
        text:
          'Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.',
        temperature: {
          min: 23,
          max: 32,
        },
        rain: {
          probability: 67,
          precipitation: 19,
        },
      },
      {
        date: '2017-02-06',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 22,
          max: 33,
        },
        rain: {
          probability: 60,
          precipitation: 8,
        },
      },
      {
        date: '2017-02-07',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 25,
          max: 30,
        },
        rain: {
          probability: 60,
          precipitation: '11',
        },
      },
    ],
  },
  {
    period: {
      begin: '2017-02-01',
      end: '2017-02-07',
    },
    locale: {
      id: 3477,
      name: 'São Paulo',
      state: 'SP',
      latitude: -23.548,
      longitude: -46.636,
    },
    weather: [
      {
        date: '2017-02-01',
        text:
          'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
        temperature: {
          min: 19,
          max: 27,
        },
        rain: {
          probability: 60,
          precipitation: 20,
        },
      },
      {
        date: '2017-02-02',
        text:
          'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
        temperature: {
          min: 20,
          max: 29,
        },
        rain: {
          probability: 60,
          precipitation: 15,
        },
      },
      {
        date: '2017-02-03',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 21,
          max: 30,
        },
        rain: {
          probability: 60,
          precipitation: 15,
        },
      },
      {
        date: '2017-02-04',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 21,
          max: 31,
        },
        rain: {
          probability: 60,
          precipitation: 11,
        },
      },
      {
        date: '2017-02-05',
        text:
          'Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.',
        temperature: {
          min: 22,
          max: 31,
        },
        rain: {
          probability: 67,
          precipitation: 16,
        },
      },
      {
        date: '2017-02-06',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 21,
          max: 32,
        },
        rain: {
          probability: 60,
          precipitation: '8',
        },
      },
      {
        date: '2017-02-07',
        text: 'Sol com algumas nuvens. Chove rápido durante o dia e à noite.',
        temperature: {
          min: 22,
          max: 33,
        },
        rain: {
          probability: 60,
          precipitation: 26,
        },
      },
    ],
  },
];

export default function Home() {
  const [citysToShow, setCitysToShow] = React.useState();

  const onSearch = (value) => {
    const filteredCitys = fakeData.filter(
      (city) =>
        city.locale.name
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        city.locale.state
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
    );

    setCitysToShow(filteredCitys);
  };

  React.useEffect(() => {
    if (fakeData.length > 0 && !citysToShow) {
      setCitysToShow(fakeData);
    }
  }, [citysToShow]);
  return (
    <div className="weather-content">
      <div className="weather-content__header">
        <img
          src={path.join(__dirname, './images/logo-white.png')}
          alt="Logo ClimaTempo"
        />
      </div>
      <div className="weather-content__input">
        <AutoComplete style={{ width: '100%' }} onSearch={onSearch}>
          {citysToShow && citysToShow.length > 0 ? (
            <>
              {citysToShow.map((el) => (
                <AutoComplete.Option
                  value={`${el.locale.name} - ${el.locale.state}`}
                  key={el.locale.id}
                />
              ))}
            </>
          ) : (
            ''
          )}
        </AutoComplete>
      </div>
      <div className="weather-content__results">
        <h1>
          Previsão do tempo para {fakeData[0].locale.name} -{' '}
          {fakeData[0].locale.state}
        </h1>
        <div className="wheater-content__results_box_cards">
          {fakeData[0].weather.map((w) => (
            <Card
              day={w.date}
              text={w.text}
              min={w.temperature.min}
              max={w.temperature.max}
              prob={w.rain.probability}
              prec={w.rain.precipitation}
              key={w.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
