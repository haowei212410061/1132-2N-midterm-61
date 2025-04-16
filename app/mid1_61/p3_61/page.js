import SectionTitle_61 from '@/components/demo_61/w02_tailwind_xx/SectionTitle_61';
export default function Mid1P3Page_xx() {
  return (
    <section className='bg-white py-20 ' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <article>
          <SectionTitle_61 text='Welcome to Oasis wild' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            laboriosam iste corporis, hic deserunt totam quo explicabo
            praesentium nostrum provident fugit neque recusandae, sed labore
            nobis maiores enim non magnam est quia obcaecati illum impedit.
            Laudantium dolores nihil officia magni ducimus magnam explicabo
            libero optio quibusdam! Eius error eos laudantium!
          </p>
        </article>
        <div>
          <img src='/mid1/about-1.jpg' className='w-full h-64' alt='' />
        </div>
      </div>

      <div className='align-element grid md:grid-cols-2 items-center gap-18 mt-3'>
        <div>
          <img src='/mid1/about-2.jpg' className='w-full h-64' alt='' />
        </div>
        <article>
          <SectionTitle_61 text='Managed By our family Since 1992' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            laboriosam iste corporis, hic deserunt totam quo explicabo
            praesentium nostrum provident fugit neque recusandae, sed labore
            nobis maiores enim non magnam est quia obcaecati illum impedit.
            Laudantium dolores nihil officia magni ducimus magnam explicabo
            libero optio quibusdam! Eius error eos laudantium!
          </p>
        </article>
      </div>
    </section>
  );
}
