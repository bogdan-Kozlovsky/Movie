import React from 'react';

const Banner = (): React.ReactElement => {
  return (
    <div>
      <h1>Ласкаво просимо.</h1>
      <h2>Мільйони фільмів, серіалів і людей. Досліджуйте зараз.</h2>
      <form>
        <input type="text" placeholder="Пошук фільму, серіалу, людини..." />

        <button>Пошук</button>
      </form>
    </div>
  );
};

export default Banner;
