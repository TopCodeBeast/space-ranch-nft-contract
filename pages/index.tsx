import type { NextPage } from "next";
import { SetStateAction, useState } from "react";
import { useRouter } from "next/router";

import Header from "../containers/Marketplace/components/Header";
import Footer from "../containers/Marketplace/components/Footer";
import HeroSection from "../containers/Marketplace/components/HeroSection";
import Items from "../containers/Marketplace/components/Items";
import BuyModal from "../containers/Marketplace/components/BuyModal";
import MembershipTiers from "../containers/Marketplace/components/MembershipTiers";
import { StoreThing } from "../containers/Marketplace/controllers/useMarketplaceController";
import ConfirmationModal from "../containers/Marketplace/components/ConfirmationModal";
import TermsOfService from "../containers/Marketplace/components/TermsOfService";

const Store: NextPage = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as StoreThing);

  const handleOpenTermsModal = (item: StoreThing) => {
    setSelectedItem(item);
    setShowTermsModal(true);
  }

  const handleOpenBuyModal = () => {
    setShowTermsModal(false);
    setShowBuyModal(true);
  }

  const handleCloseBuyModal = () => {
    setSelectedItem({} as StoreThing);
    setShowBuyModal(false);
  }

  const handleCloseTermsModal = () => {
    setSelectedItem({} as StoreThing);
    setShowTermsModal(false);
  }
  const { query } = useRouter();
  const transactionHashes: any = query.transactionHashes;

  return (
    <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-slate-900/90">
      <Header />
      <div className="md:mx-24 mt-4">
        <HeroSection />
      </div>
      <div className="flex w-full">
        <Items showModal={handleOpenTermsModal} />
      </div>
      <MembershipTiers />
      <div className="mx-4 md:mx-24 md:mt-4">
        {showTermsModal && <TermsOfService closeModal={handleCloseTermsModal} continuePurchase={handleOpenBuyModal} />}
        {showBuyModal && <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />}
        {transactionHashes && <ConfirmationModal transactionHashes={transactionHashes} />}
      </div>
      <Footer />
    </div>
  );
};

export default Store;
