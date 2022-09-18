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
          &#62;&#62;&#62; Live Demo on NEAR Testnet <br />
            Join us on our mission to collaboratively build the future of space exploration in Wyoming.
          </div>
          <div className="">
            <span className="text-white">The SpaceRanch Membership is a mechanism for governance and applications built for the SpaceRanch ecosystem, which includes access to the physical properties and digital immersive environments.</span>
          </div>
          <div className="">
            <span className="text-white">There are five ranks which represent different teirs of opportunities and responsibilities within the organization. Climb the ranks by completing bounties and participating in the SpaceRanch.</span> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
