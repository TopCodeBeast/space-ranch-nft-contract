import { useState } from "react";
import { MbTab, MbMenuWrapper, MbDropdownMenu, MbIcon, EIconName } from "mintbase-ui";
import { Item, LoadingItem } from "./Item";
import HeroSection  from "./HeroSection";
import useStoreThingsController, { StoreThing } from "../controllers/useMarketplaceController";
import useStoreController, { Store } from "../controllers/useStoresController";
import { MbButton } from "mintbase-ui"

const Items = ({ showModal, showConversationModal, showDashboardModal }: { showModal: (item: StoreThing) => void, showConversationModal: () => void, showDashboardModal: () => void  }) => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('');

  const { things, loading } = useStoreThingsController();
  const { stores, loading: loadingStores } = useStoreController();

  // show store names in the dropdown menu
  const storeTabs = stores.map((store: Store) => {
    return {
      content: <span>{store.name}</span>,
      onClick: () => setSelectedStore(store.id)
    }
  });

  // add 'all stores' to the beginning of the dropdown menu
  storeTabs.unshift({
    content: <span>All Stores</span>,
    onClick: () => setSelectedStore('')
  });
  
  const scrollToPurchase = () => {
    const section = document.querySelector( '#purchase-items' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // filter things by store name selected in the dropdown menu
  const filteredThings = things.filter((thing: StoreThing) => {
    return selectedStore === '' || thing.storeId === selectedStore;
  });

  return (
    <div className='w-full ml-6 items-center mt-4 mr-6'>
      <div className='flex w-full ml-6 items-center mt-4 hidden'>
        <div onClick={() => setSelectedTab('all')}>
          <MbTab
            label={<span>All Items</span>}
            isActive={selectedTab === 'all'} 
            isSmall
          />
        </div>
        <MbMenuWrapper setIsOpen={setMenuOpen}>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <MbTab
              label={
                <div className="flex space-x-8 items-center">
                  <span>{selectedStore === ''
                    ? 'All Stores'
                    : stores.find((store: Store) => store.id === selectedStore)?.name
                  }</span>
                  <div className="pointer-events-none">
                    <MbIcon
                      name={
                        menuOpen
                          ? EIconName.ARROW_DROP_UP
                          : EIconName.ARROW_DROP_DOWN
                      }
                      size="16px"
                      color="blue-300"
                      darkColor="blue-100"
                    />
                  </div>
                </div>
              }
              isSmall
            />
          </div>
          <MbDropdownMenu
            items={storeTabs}
            isOpen={menuOpen} 
            className="mt-2" 
          />
        </MbMenuWrapper>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 my-12">
        <div className="bg-slate-900 rounded shadow-lg p-4 relative">
          <div className="">
            <div className="text-xl text-white mt-1 font-bold">Purchase Membership</div>
            <div className="text-sm mt-2"></div>
          </div>
          <div className="flex items-center mt-4 justify-center">
            <MbButton onClick={() => scrollToPurchase()} label={`Get Started`} />
          </div>
        </div>

        <div className="bg-slate-900 rounded shadow-lg p-4 relative">
          <div className="">
            <div className="text-xl text-white mt-1 font-bold">Community Discussion</div>
            <div className="text-sm mt-2"></div>
          </div>
          <div className="flex items-center mt-4 justify-center">
            <MbButton onClick={() => showConversationModal()} label={`Take Me There`} />
          </div>
        </div>

        <div className="bg-slate-900 rounded shadow-lg p-4 relative">
          <div className="">
            <div className="text-xl text-white mt-1 font-bold">Documentation</div>
            <div className="text-sm mt-2"></div>
          </div>
          <div className="flex items-center mt-4 justify-center">
            <MbButton onClick={() => openInNewTab('https://spaceranch.gitbook.io/documentation')} label={`Learn More`} />
          </div>
        </div>

        <div className="bg-slate-900 rounded shadow-lg p-4 relative">
          <div className="">
            <div className="text-xl text-white mt-1 font-bold">Project Dashboard</div>
            <div className="text-sm mt-2"></div>
          </div>
          <div className="flex items-center mt-4 justify-center">
            <MbButton onClick={() => showDashboardModal()} label={`Sign In`} />
          </div>
        </div>
      </div>
      <hr className="style2 ml-8 mr-8 mt-4 shadow-lg"/>
      <HeroSection />
      {/** grid */}
      <hr id="purchase-items" className="style2 ml-8 mr-8 shadow-lg"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-12">
        {loading ? (
          <LoadingItem />
        ) : (
          filteredThings.map((thing: StoreThing, index: number) => (
            <Item key={index} item={thing} showModal={showModal} />
          ))
        )}
      </div>
    </div>
  );
}

export default Items;
