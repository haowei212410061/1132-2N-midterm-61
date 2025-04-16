import Link from 'next/link';

export default function Navigation_xx() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/mid1_61'
            className='hover:text-accent-400 transition-colors'
          >
            mid1_61
          </Link>
        </li>
        <li>
          <Link
            href='/demo_61'
            className='hover:text-accent-400 transition-colors'
          >
            demo_61
          </Link>
        </li>
        <li>
          <Link
            href='/prep_quiz1_61'
            className='hover:text-accent-400 transition-colors'
          >
            prep_quiz1_61
          </Link>
        </li>
      </ul>
    </nav>
  );
}
