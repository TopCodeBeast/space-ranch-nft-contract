const Footer = () => {

  return (
    <nav className="flex justify-between w-full bg-slate-900 bottom-0 z-40 lg:border-b border-solid border-black/75">
      <div className="flex justify-between items-center pt-4 sm:pt-0 pb-4 sm:pb-0">
      <img src="logo-x.png" className="flex items-center sm:ml-5" style={{width: '30px'}} />
        <h1 className="font-light text-2xl uppercase p-2 sm:p-4 border-gray-100 hidden sm:block">
          SpaceRanch DAO
        </h1>
      </div>
      {/** login/logout with wallet */}
      <div className="flex items-center mr-2">
        &nbsp;
      </div>
    </nav>
  )
}

export default Footer;
