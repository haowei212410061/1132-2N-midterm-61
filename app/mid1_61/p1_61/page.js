'use client';
import Wrapper from '../../../styles/wrappers/mid1_61/Tours';
export default function Mid1P1Page_61() {
  return (
    <Wrapper>
      <section>
        <div className='title'>
          <h2>P1_61:our tours</h2>
          <div className='underline'>212410061 周浩偉</div>
        </div>
        <div>
          <article className='single-tour'>
            <img src='/mid1/ireland.jpeg' alt='Best of Paris in 7 Days Tour' />
            <footer>
              <div className='tour-info'>
                <h4>Best of Paris in 7 Days Tour</h4>
                <h4 className='tour-price'>$1,995</h4>
              </div>
              <p>
                Paris is synonymous with the finest things that culture can
                offer — in art, fashion, food, literature, and ideas. On this
                tour, your Paris-savvy Rick Steves guide will immerse you in the
                very best of ...<button>read more</button>
              </p>
              <button className='delete-btn'>not interested</button>
            </footer>
          </article>
          <article className='single-tour'>
            <img
              src='/mid1/vienna.jpeg'
              alt='Best of Ireland in 14 Days Tour'
            />
            <footer>
              <div className='tour-info'>
                <h4>Best of Ireland in 14 Days Tour</h4>
                <h4 className='tour-price'>$3,895</h4>
              </div>
              <p>
                Rick Steves' Best of Ireland tour kicks off with the best of
                Dublin, followed by Ireland's must-see historical sites,
                charming towns, music-filled pubs, and seaside getaways —
                including Kinsale, the D...<button>read more</button>
              </p>
              <button className='delete-btn'>not interested</button>
            </footer>
          </article>
          <article className='single-tour'>
            <img
              src='/mid1/vienna.jpeg'
              alt='Best of Salzburg &amp; Vienna in 8 Days Tour'
            />
            <footer>
              <div className='tour-info'>
                <h4>Best of Salzburg &amp; Vienna in 8 Days Tour</h4>
                <h4 className='tour-price'>$2,695</h4>
              </div>
              <p>
                Let's go where classNameical music, towering castles, and
                the-hills-are-alive scenery welcome you to the gemütlichkeit of
                Bavaria and opulence of Austria's Golden Age. Your Rick Steves
                guide will bring th...<button>read more</button>
              </p>
              <button className='delete-btn'>not interested</button>
            </footer>
          </article>
          <article className='single-tour'>
            <img src='/mid1/italy.jpeg' alt='Best of Rome in 7 Days Tour' />
            <footer>
              <div className='tour-info'>
                <h4>Best of Rome in 7 Days Tour</h4>
                <h4 className='tour-price'>$2,095</h4>
              </div>
              <p>
                Our Rome tour serves up Europe's most intoxicating brew of
                dazzling art, earth-shaking history, and city life with style.
                On this Rome vacation, your tour guide will resurrect the
                grandeur of ancient ...<button>read more</button>
              </p>
              <button className='delete-btn'>not interested</button>
            </footer>
          </article>
          <article className='single-tour'>
            <img src='/mid1/poland.jpeg' alt='Best of Poland in 10 Days Tour' />
            <footer>
              <div className='tour-info'>
                <h4>Best of Poland in 10 Days Tour</h4>
                <h4 className='tour-price'>$2,595</h4>
              </div>
              <p>
                Starting in the colorful port city of Gdańsk, you'll escape the
                crowds and embrace the understated elegance of
                ready-for-prime-time Poland for 10 days. With an expert Rick
                Steves guide at your side, y...<button>read more</button>
              </p>
              <button className='delete-btn'>not interested</button>
            </footer>
          </article>
        </div>
      </section>
    </Wrapper>
  );
}
