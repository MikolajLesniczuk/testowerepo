import { useState } from 'react';

export const Inputs = () => {
  const [name, setName] = useState('');
  const [nazwisko, setNazwisko] = useState('');
  const [plec, setPlec] = useState('');

  const handlSubmit = e => {
    e.preventDefault();
    const data = { name, nazwisko, plec };
    console.log(data);
    //   send to backend ...
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNazwisko = e => {
    setNazwisko(e.target.value);
  };
  const handleChangePlec = e => {
    setPlec(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handlSubmit}>
        <input
          name="imie"
          value={name}
          type="text"
          placeholder="imie"
          onChange={handleChangeName}
        ></input>
        <input
          name="nazwisko"
          value={nazwisko}
          type="text"
          placeholder="nazwisko"
          onChange={handleChangeNazwisko}
        ></input>
        <input
          name="plec"
          value={plec}
          type="text"
          placeholder="plec"
          onChange={handleChangePlec}
        ></input>

        <button type="submit">Wyślij dane do backendu</button>
      </form>
      <div
        style={{
          margin: '40px',
        }}
      >
        <div>MOJE IMIE : {name} </div>
        <div>MOJE nazwisko : {nazwisko} </div>
        <div>MOJA płeć: {plec}</div>
      </div>
    </div>
  );
};
