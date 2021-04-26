import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

const About = (props) => {
  const [pathname, setPathname] = useState(null);
  const [name, setName] = useState('');
  console.log(name);
  let location = useLocation();
  React.useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  const arr = [];
  for (let key in props) {
    arr.push(props[key]);
  }


  return (
    <>
      {arr[0][0].map(el => {
        return (
          <div className="about" key={Math.random() * 100000}>
            <div>
              {`${pathname}` === `/${el.id}` ?
                <form>
                  <table className="tableInput">
                    <thead>
                    <tr>
                      <th>
                        <label>
                          Форма
                        </label><br />
                        <label>
                          Имя:
                        </label>&nbsp;
                        <input
                          value={el._name}
                          onChange={event => setName(event.target.value)}
                          name="name"
                          type="text"
                        />
                        <br />
                        <label>
                          Иностранец:
                        </label>&nbsp;
                        <input
                          type="checkbox"
                          name="foreigner"
                          checked={el._foreigner}
                          readOnly
                        /><br />
                        <label>
                          Пол:
                        </label>&nbsp;
                        <select id="sex" name="sex">
                          {el._sex < 2 ?
                            <option value="male">Муж</option>
                            :
                            <option value="female">Жен</option>
                          }
                        </select>
                      </th>
                    </tr>
                    </thead>
                  </table>
                </form>
                :
                null
              }
            </div>
          </div>
        );
      })}
    </>
  );
};

export default About;
