import NavigationMid1_61 from '@/components/mid1_61/NavigationMid1_61';
import Logo_61 from '@/components/Logo_61';

function HeaderMid1_61() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo_61 text='mid1_61' />
        <NavigationMid1_61 />
      </div>
    </header>
  );
}

export default HeaderMid1_61;
