import React from 'react';
import formData from '../../models/formData.json';

const Form = () => {

  let arr = [];
  for (let key in formData) {
    arr.push(formData[key]);
  }

  let arrTwo = [];
  for (let key in arr[1]) {
    arrTwo.push(arr[1][key].sl);
  }
  const result = arrTwo[2].map((el2) => {
    return el2;
  });

  return (
    <>
      {arr[1].map(el => {
        return (
          <ol key={Math.random() * 100000}>
            <li>Тип компонента формы (ct): {el.ct}</li>
            <li>Ширина компонента в пикселах (cw): {el.cw}</li>
            <li>Порядковый номер компонента на форме (gn): {el.gn}</li>
            <li>Отображаемое имя компонента (ns): {el.ns}</li>
            <li>ссылка на поле Таблицы (rv): {el.rv}</li>
          </ol>
        );
      })}
      {result.map(el => {
        return (
          <ol key={Math.random() * 100000}>
            <li>id: {el.id}</li>
            <li>sex: {el.name}</li>
          </ol>
        );
      })}
    </>
  );
};

export default Form;
