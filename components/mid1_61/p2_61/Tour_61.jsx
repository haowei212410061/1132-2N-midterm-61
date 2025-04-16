'use client';

const Tour_61 = ({ id, name, info, img, price }) => {
  return (
    <article className='single-tour'>
      <img src={img} alt='Best of Paris in 7 Days Tour' />
      <footer>
        <div className='tour-info'>
          <h4>Best of Paris in 7 Days Tour</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {info}
          <button>read more</button>
        </p>
        <button className='delete-btn'>not interested</button>
      </footer>
    </article>
  );
};

export default Tour_61;
