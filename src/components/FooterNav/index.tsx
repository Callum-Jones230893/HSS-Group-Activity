import NavMenu from '../NavMenu';

const FooterNav = () => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8'>
        <NavMenu />
      </div>
    </div>
  )
}

export default FooterNav