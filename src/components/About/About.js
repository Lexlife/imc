import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';

const About = (props) => {
  const [pathname, setPathname] = useState(null);
  let location = useLocation();
  React.useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  let arr = [];
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
                <table style={{ margin: '20px' }}>
                  <thead>
                  <tr>
                    <th>
                      <ol key={Math.random() * 100000}>
                        <li>id: {el.id}</li>
                        <li>Foreigner: {el._foreigner ? 'yes' : 'no'}</li>
                        <li>Name: {el._name}</li>
                        <li>Sex: {el._sex < 2 ? 'male' : 'female'}</li>
                      </ol>
                    </th>
                  </tr>
                  </thead>
                </table>
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
