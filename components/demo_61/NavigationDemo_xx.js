import Link from 'next/link';

export default function NavigationDemo_xx() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/demo_61/w02_tailwind_61'
            className='hover:text-accent-400 transition-colors'
          >
            w2_tailwind_61
          </Link>
        </li>
        <li>
          <Link
            href='/demo_61/w05_oasis_61'
            className='hover:text-accent-400 transition-colors'
          >
            w5_oasis_61
          </Link>
        </li>
        <li>
          <Link
            href='/demo_61/w06_blog_61'
            className='hover:text-accent-400 transition-colors'
          >
            w6_blog_61
          </Link>
        </li>
        <li>
          <Link
            href='/demo_61/w08_booklist_61'
            className='hover:text-accent-400 transition-colors'
          >
            w8_booklist_61
          </Link>
        </li>
      </ul>
    </nav>
  );
}
