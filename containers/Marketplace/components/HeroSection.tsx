import { MbText } from "mintbase-ui";

const HeroSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="items-center justify-center">
        {/*<MbText
          className="text-3xl uppercase p-4 border-gray-100"
        >
          NFT Membership Selection
        </MbText> <img src="logo-x.png" className="flex items-center float-left p-4" style={{width: '130px'}} /> */}

        <div className="pl-4 pr-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-12 text-white">
          <div className="text-xl text-white mt-1 font-bold">
          >>> The Journey Begins Today.<br />
            Join us on our mission to collaboratively build the future of space exploration and asset managment to Wyoming, under our DAO LLC.
          </div>
          <div className="">
            The <span className="text-white">SpaceRanch NFT Membership Fundraiser</span> is a mechanism to raise capital through tiered membership, which will enable participants to engage with our <span className="text-white">web3 applications</span> built for the <span className="text-white">SpaceRanch ecosystem</span>, as well as access to the physical properties and digital immersive environments.
          </div>
          <div className="">
            A succesful program will generate <span className="text-white">$25 million</span>, which will be the necessary amount of funding to meet capital expendiatures for the purchase and development of the SpaceRanch.

            Up to 10% of the SPCR token supply will be distributed to the <span className="text-white">SpaceRanch NFT Members</span> proportional to rank.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
