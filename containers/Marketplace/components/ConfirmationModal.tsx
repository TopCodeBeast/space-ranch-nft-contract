import { MbText, MbButton, } from 'mintbase-ui';

const ConfirmationModal = ({ transactionHashes }: { transactionHashes: any}) => {
    const handleHashClick = ()=>{
        window.location.href = 'https://explorer.testnet.near.org/transactions/' + transactionHashes;
    }
    const forceRefresh = ()=>{
        window.location.href = window.location.pathname;
    }
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="mt-3 ml-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="flex flex-row items-center justify-between w-full border-black border-b-2">
              <h3 className="text-md leading-6 font-medium text-gray text-white" id="modal-title">
                Great Success!
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
                Congratulations on your new Membership! Please ensure you have copied this transaction hash for your records. Your NFT's now live in your NEAR wallet.
                <br/>
                <div className='text-right'>
                    <MbButton onClick={forceRefresh} label="I Understand" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal;
