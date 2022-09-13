import { MbText, MbButton, } from 'mintbase-ui';
import { useWallet } from "../../../services/providers/NearWalletProvider"
import { SetStateAction, useState, useEffect } from "react";


const ConfirmationModal = ({ transactionHashes, transactionInfo }: { transactionHashes: any, transactionInfo: any}) => {
    const { wallet, signIn, addMember, isConnected, signOut, details } = useWallet()
    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const transactionInfoParsed = JSON.parse(transactionInfo);

    const handleHashClick = ()=>{
        window.location.href = 'https://explorer.testnet.near.org/transactions/' + transactionHashes;
    }
    const forceRefresh = ()=>{
        window.location.href = window.location.pathname;
    }
    const setStep = (stepNumber: number )=>{
      setCurrentStep(stepNumber);
    }

    useEffect(() => {
      const forcedRedirect = window.localStorage.getItem('forceRedirect');
      // this is ghetto AF. TODO: reove
      if(forcedRedirect){
        window.localStorage.removeItem('forceRedirect');
        window.localStorage.removeItem('nft-transaction-hash');
        window.location.replace('https://testnet.app.astrodao.com/dao/testtesrrr.sputnikv2.testnet/proposals');
      }
    
      if(transactionInfoParsed.type === 'make-offer' && transactionHashes){
        window.localStorage.setItem('nft-transaction-hash', transactionHashes);
      }
      if(!transactionHashes){
        setCurrentStep(2);
      }

    },[]);

    const savedHash = window.localStorage.getItem('nft-transaction-hash');
  
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          
          {currentStep === 2 && !isConnected && 
            <div className="mt-3 ml-2 text-center sm:mt-0 sm:ml-4 sm:text-left">  
              <div className="flex flex-row items-center justify-between w-full border-black border-b-2">
                <h3 className="text-md leading-6 font-medium text-gray text-white" id="modal-title">
                  2) Sign into our AstroDAO contract
                </h3>
              </div>
          
              <div className="py-4 text-center">
                  Cool! We will now create a proposal for you to join the SpaceRanch DAO, powered by AstroDAO. 
                  <br/>
                  <br/>To continue please authenticate into the contract.
                  </div>
                  <div className='text-center'>
                      <MbButton onClick={()=>signIn()} label="Sign into SpaceRanch AstroDAO" />
                  </div>
            </div>
          }
          {currentStep === 2 && isConnected && 
            <div className="mt-3 ml-2 text-center sm:mt-0 sm:ml-4 sm:text-left">  
              <div className="flex flex-row items-center justify-between w-full border-black border-b-2">
                <h3 className="text-md leading-6 font-medium text-gray text-white" id="modal-title">
                  3) Authorize Proposal
                </h3>
                <span className='text-right'>
                      <MbButton onClick={()=>signOut()} label="Sign out" />
                  </span>
              </div>
          
              <div className="py-4 text-center">
                    This is the last step! We'll automatically draft a proposal to get you into your role in the group. <br/><br/>Note: There will be a refundable deposit of <b> .1 NEAR </b> once the proposal is reviewed and accepted. 
                  <br/>
                  <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Full Name" className="cust-input"/><br/>
                  <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Full Phone" className="cust-input"/><br/>
                  <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Full Email" className="cust-input"/><br/>
                  </div>
                  <div className='text-center'>
                      <MbButton onClick={()=>addMember(name, phone, email, savedHash, details)} label="Add Me to SpaceRanch DAO!" />
                  </div>
            </div>
          }
          {currentStep === 1 && <div className="mt-3 ml-2 text-center sm:mt-0 sm:ml-4 sm:text-left">  
            <div className="flex flex-row items-center justify-between w-full border-black border-b-2">
              <h3 className="text-md leading-6 font-medium text-gray text-white" id="modal-title">
                {currentStep}) Great Success!
              </h3>
            </div>
            <h3 className="text-md leading-6 font-medium text-gray text-center" id="modal-title">
                <br/>
                Purchase Confirmation / Transaction Hash:
              </h3>
              <div className="bg-gray-50 py-4 text-center cursor-pointer" onClick={handleHashClick}>
                    <MbText className="p-med-90 text-gray-700">
                        <span>{transactionHashes}</span>
                    </MbText>
                </div>
                <br/>
                Congratulations on your new Membership! Please ensure you have copied this transaction hash for your records. Your NFT membership has been transfered to your NEAR wallet.
                <br/>
                <br/>
                <div className='text-center'>
                  <MbButton onClick={()=>setCurrentStep(2)} label="Continue to Your Membership" />
                </div>
            </div>
          }

          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal;
