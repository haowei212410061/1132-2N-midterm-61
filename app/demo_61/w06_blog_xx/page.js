'use client';

import { getBlogs } from '@/lib/db-blog';
import Blogs_xx from '@/components/demo_61/w06_blogs_xx/Blogs_xx';
import { tours_61 } from '@/components/mid1_61/p2_61/tours_data_61';
import Tour_61 from '@/components/mid1_61/p2_61/Tour_61';
import Wrapper from '@/styles/wrappers/mid1_61/Tours';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
export default function Mid1P2Page_xx() {
  console.log('p2_61: tours_61', tours_61);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(tours_61);
  }, []);
  return (
    <Wrapper>
      <section>
        <div className='title text-2xl text-emerald-600'>
          <h2 className='text-2xl'>P2_61:our tours(Json array)</h2>
          <div className='underline text-2xl'>212410061 周浩偉</div>
        </div>
        <div>
          {tours.map((tour) => {
            return (
              <Tour_61
                key={tour.id}
                img={tour.img}
                info={tour.info}
                price={tour.price}
              />
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
}
