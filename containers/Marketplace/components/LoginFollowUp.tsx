import { MbText } from "mintbase-ui";
import Markdown from 'markdown-to-jsx';
import { useWallet } from "../../../services/providers/NearWalletProvider"

const MembershipTiers = () => {
    const { wallet, signIn, signOut, addMember } = useWallet()
  return (
      <div className="md:mx-24 mt-4">
        <div className="">
            <div className="items-center justify-center">
                <div className="video-responsive">
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/5IGpBBcRcZA`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
            <br/><br/>
        </div>
    </div>
  );
}

export default MembershipTiers;
