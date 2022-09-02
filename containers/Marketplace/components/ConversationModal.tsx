import { MbText, MbButton, EState,} from 'mintbase-ui';

const ConversationModal = ({ closeModal }: { closeModal: () => void }) => {
  
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true" >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-slate-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="mt-3 ml-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <div className="flex flex-row items-center justify-between w-full border-black">
              <h3 className="text-md leading-6 font-medium text-gray text-white" id="modal-title">
                Welcome to the Conversation!
              </h3>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md border-2 border-slate-900 hover:border-black text-gray-400 hover:text-primary focus:outline focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={() => closeModal()}
                aria-label="Close"
              >
                   <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <hr className="style3" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 my-3">
                    <div>
                        <h3 className="text-md leading-6 font-medium text-gray text-white text-center" id="modal-title">
                            Members Area
                        </h3>
                        <hr className="style3" />
                        <div className="text-sm text-center cursor-pointer" id="modal-title">
                            A special conversation area reserved for current members of the platform. Active members will have purchased one of the membership subscriptions from our website. 
                        </div>
                        <div className="flex items-center mt-4 justify-center">
                            <MbButton state={EState.DISABLED} label={`Coming Soon`} disabled={true} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-md leading-6 font-medium text-gray text-white text-center" id="modal-title">
                            Non-Members Area
                        </h3>
                        <hr className="style3" />
                        <div className="text-sm text-center cursor-pointer" id="modal-title">
                            Not ready to commit to a membership, but want to get involved in the conversation? Come join us on Discord as we hammer out exciting details for the SpaceRanch DAO!
                        </div>
                        <div className="flex items-center mt-4 justify-center">
                            <MbButton onClick={() => openInNewTab('https://discord.gg/sj9gQFXUaW')}  label={`Go to Discord`} state={EState.ACTIVE} />
                        </div>
                    </div>
                </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationModal;
