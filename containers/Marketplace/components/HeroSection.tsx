import { MbText } from "mintbase-ui";

const HeroSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="items-center justify-center">
        {/*<MbText
          className="text-3xl uppercase p-4 border-gray-100"
        >
          NFT Membership Selection
        </MbText>*/}
        <MbText className="p-4">
        The SpaceRanch NFT membership fundraiser is a mechanism to raise capital through tiered membership, which will enable participants to engage with the web3 applications built for the SpaceRanch ecosystem, as well as access to the physical properties and digital immersive environments.

A succesful program will generate $25 million, which will be the necessary amount of funding to meet capital expendiatures for the purchase and development of the SpaceRanch.

Up to 10% of the SPCR token supply will be distributed to the SpaceRanch NFT members proportional to rank.
        </MbText>
      </div>
    </div>
  );
}

export default HeroSection;
