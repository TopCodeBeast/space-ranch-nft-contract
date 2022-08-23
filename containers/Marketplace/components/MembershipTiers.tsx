import { MbText } from "mintbase-ui";
import Markdown from 'markdown-to-jsx';

const MembershipTiers = () => {
  return (
      <div className="md:mx-24 mt-4">
        <div className="flex flex-1 flex-col items-center justify-center">
        <div className="items-center justify-center">
            {/*<MbText
            className="text-3xl uppercase p-4 border-gray-100"
            >
            NFT Membership Selection
            </MbText>*/}
        
            <div className="p-4">   
           
            <h1 id="spaceranch-nft-membership-program" className="text-3xl text-white">Membership Tiers:</h1>
            <p>The following membership tiers are as follows: <strong>Captain, Commander, Lieutenant, Ensign, and Cadet.</strong></p>
            <br/>
            <ul>
                          <li>
                              <h3 id="captain" className="text-2xl text-white">Captain</h3>
                              <ul className="pl-4">
                                  <li className="list-disc" >$250,000 initial mint price</li>
                                  <li className="list-disc" >21 maximum supply to be created<ul>
                                        <ul className="pl-4">
                                            <li className="list-disc"> Only 10 will be available to mint at release</li>
                                        </ul>
                                  </ul>
                                  </li>
                                  <li className="list-disc">Location for a private homestead at the SpaceRanch

                                      <ul className="pl-4">
                                          <li className="list-disc">owning this NFT is representative of fractal ownership of the immediate land surrounding the physical building for the homestead.</li>
                                          <li className="list-disc">when selling your property, this NFT must be packaged with the sale otherwise the transaction is invalid.</li>
                                      </ul>
                                  </li>
                                  <li className="list-disc">Eligibility to purchase Guided Elk Hunts when Available</li>
                                  <li className="list-disc">Participation in yearly, quarterly and monthly leadership roundtables  </li>
                                  <li className="list-disc">Access to the WyoSky and SpaceRanch core contributors workspace</li>
                                  <li className="list-disc">Access to Digital &amp; Physical Facilities</li>
                                  <li className="list-disc">Invitation and VIP to all Physical &amp; Digital Events</li>
                                  <li className="list-disc">Eligibility to Recieve Tokens and other Airdrops per Rank<ul>
                                    <ul className="pl-4">
                                      <li className="list-disc"> DAO tokens for voting and governance participation</li>
                                      </ul>
                                  </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                      <br/>
                      <ul>
                          <li><h3 id="captain" className="text-2xl text-white">Commander</h3>
                              <ul className="pl-4">
                                  <li className="list-disc">$25,000 initial mint price</li>
                                  <li className="list-disc">210 maximum supply to be created
                                        <ul className="pl-4">
                                            <li className="list-disc">Only 100 will be available to mint at release</li>
                                        </ul>
                                  </li>
                                  <li className="list-disc">Eligibility to purchase Guided Elk Hunts when Available</li>
                                  <li className="list-disc">Access to the WyoSky and SpaceRanch core contributors workspace</li>
                                  <li className="list-disc">Participation in yearly and quarterly leadership roundtables</li>
                                  <li className="list-disc">Access to Digital &amp; Physical Facilities</li>
                                  <li className="list-disc">Invitation and VIP to all Physical &amp; Digital Events</li>
                                  <li className="list-disc">Eligibility to Recieve Airdrops per Rank
                                  <ul className="pl-4">
                                      <li className="list-disc">DAO tokens for voting and governance participation</li>
                                  </ul>
                                  </li>
                              </ul>
                          </li>
                          <br/>
                          <li><h3 id="lieutenant" className="text-2xl text-white">Lieutenant</h3>
                              <ul className="pl-4">
                                  <li className="list-disc">$2,500 initial mint price</li>
                                  <li className="list-disc">2,100 maximum supply to be created
                                  <ul className="pl-4">
                                      <li className="list-disc">Only 1000 will be available to mint at release</li>
                                  </ul>
                                  </li>
                                  <li className="list-disc">Participation in yearly leadership roundatables</li>
                                  <li className="list-disc">Access to Digital &amp; Physical Facilities</li>
                                  <li className="list-disc">Invitation to all Physical and Digital Events</li>
                                  <li className="list-disc">Eligibility to Recieve Airdrops per Rank
                                  <ul className="pl-4">
                                      <li className="list-disc">DAO tokens for voting and governance participation</li>
                                  </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                      <br/>
                      <ul>
                          <li><h3 id="ensign" className="text-2xl text-white">Ensign</h3>
                              <ul className="pl-4">
                                  <li className="list-disc">$250 initial mint price</li>
                                  <li className="list-disc">21,000 maximum supply to be created<ul className="pl-4">
                                      <li className="list-disc">Only 10,000 will be available to mint at release</li>
                                  </ul>
                                  </li>
                                  <li className="list-disc">Access to Digital &amp; Physical Facilities</li>
                                  <li className="list-disc">Invitation to all Physical and Digital Events</li>
                                  <li className="list-disc">Eligibility to Recieve Airdrops per Rank
                                  <ul className="pl-4">
                                      <li className="list-disc">DAO tokens for voting and governance participation</li>
                                  </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                      <br/>
                      <ul>
                          <li><h3 id="cadet" className="text-2xl text-white">Cadet</h3>
                              <ul className="pl-4">
                                  <li className="list-disc">$25 initial mint price</li>
                                  <li className="list-disc">210,000 maximum supply to be created<ul className="pl-4">
                                      <li className="list-disc">Only 100,000 will be available to mint at release</li>
                                  </ul>
                                  </li>
                                  <li className="list-disc">Access to Digital &amp; Physical Facilities</li>
                                  <li className="list-disc">Invitation to all Digital Events</li>
                                  <li className="list-disc">Eligibility to recieve Airdrops per Rank<ul className="pl-4">
                                      <li className="list-disc">DAO tokens for voting and governance participation</li>
                                  </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                      <br/>
                      <h2 id="physical-facilities" className="text-2xl text-white">Physical Facilities</h2>
                      <p>The general public can access the facilities after an onboarding process and purchasing the membership from a secondary marketplace.</p>
                      <br/>
                      <ul>
                          <li><strong className="text-1xl text-white">Cabins</strong><ul>
                              <li>Cabin rental is available to Captain, Commander, and Lieutenant ranks with free stays included for Captains throughout the year pending availability.</li>
                          </ul>
                          </li>
                          <li><p><strong className="text-1xl text-white">RV Hookups</strong></p>
                              <ul>
                                  <li>RV Hookup will be available to all ranks for a set rate.</li>
                              </ul>
                          </li>
                          <li><p><strong className="text-1xl text-white">Camping Areas &amp; Hiking Trails</strong></p>
                              <ul>
                                  <li>Camping areas and trails are available to all ranks for a campgrounds fee of 35$ per night</li>
                              </ul>
                          </li>
                          <li><strong className="text-1xl text-white">Golf Course</strong><ul>
                              <li>Golf Course membership is included for the rank of Captain, Commander, and Lieutenant.</li>
                              <li>Daily gold membership is available to all ranks and their guests at a set rate upon availability.</li>
                          </ul>
                          </li>
                          <li><p><strong className="text-1xl text-white">Space Vehicle Hanger</strong></p>
                              <ul>
                                  <li>Scheduled tours of the hanger are available to the ranks of Ensign, Luietenant, Commander and Captain.</li>
                              </ul>
                          </li>
                          <li><p><strong className="text-1xl text-white">Launch Center</strong></p>
                              <ul>
                                  <li>Scheduled tours of the Launch Center are available to the ranks of Ensign, Luietenant, Commander and Captain.</li>
                              </ul>
                          </li>
                      </ul>
                      <ul>
                          <li><strong className="text-1xl text-white">Cattle, Bison, Buffalo Ranch</strong><ul>
                              <li>One of the key features of the SpaceRanch is that it will remain a working ranch with regenerative agricultural principles. Meat and goods from the ranch will be available to all members at wholesale prices, and available to the local communities.</li>
                          </ul>
                          </li>
                      </ul>
                      <h2 id="digital-emmersive-environment">Digital Emmersive Environment</h2>
                      <ul>
                          <li><strong className="text-1xl text-white">Metaverse</strong><ul>
                              <li>The Metaverse environment enables members to access and interact with the real time vizualized data flow for the SpaceRanch. This allows participants to be engaged in the ecosystem from anywhere on earth, or beyond.</li>
                          </ul>
                          </li>
                          <li><strong className="text-1xl text-white">Virtual Events</strong><ul>
                              <li>Allows members to be present for digital events. This can include hackathons, legislative sessions, voting events, and more.</li>
                          </ul>
                          </li>
                      </ul>
                  </div>
        </div>
        </div>
    </div>
  );
}

export default MembershipTiers;
