import Link from 'next/link';

export default function NavigationMid1_61() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/mid1_61/p1_61'
            className='hover:text-accent-400 transition-colors'
          >
            p1_61
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_61/p2_61'
            className='hover:text-accent-400 transition-colors'
          >
            p2_61
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_61/p3_61'
            className='hover:text-accent-400 transition-colors'
          >
            p3_61
          </Link>
        </li>
        <li>
          <Link
            href='/mid1_61/p4_61'
            className='hover:text-accent-400 transition-colors'
          >
            p4_61
          </Link>
        </li>
      </ul>
    </nav>
  );
}
