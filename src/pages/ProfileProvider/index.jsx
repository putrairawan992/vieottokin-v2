import React, { Fragment, useState } from 'react';
import { Container, Row } from 'components/Grid';
import Breadcrumb from 'components/Breadcrumb';
import Icon from 'icon';

const ProfileProvider = () => {
  const [showTab, setShowTab] = useState({service: true, tips: false});

  return (
    <Fragment>
      <Breadcrumb base={[ 'Home', 'Services', 'IT Advisory' ]} current="Search" />

      <Container className="py-20">
        <Row className="-mx-3">
          <div className="w-8/12 px-3">
            <div className="shadow-lg rounded-md p-6 flex">
              <img src="/images/tech-dojo.jpg" alt="tech dojo" className="mr-5" />

              <div className="w-full my-auto">
                <div className="flex justify-between w-full">
                  <h1 className="font-bold text-lg">
                    Tech Dojo
                  </h1>

                  <button className="bg-orange py-1 px-4 text-xs text-white">
                    IT ADVISORY
                  </button>
                </div>

                <div className="flex w-full items-center my-4">
                  <Icon name="badge" color="#f5821f" />

                  <span className="text-gray-500 text-xs ml-3">
                    <b>145</b> business trusted Viettonkin for this service
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  Wild Goat Studio is an experienced team of developers, designers and stuntmen, committed to equitable tech. We put an obsessive team, clean code and battle-tested strategies to work in building your digital product. Find your sound footing with us.
                </p>
              </div>
            </div>

            <div className="shadow-lg rounded-md bg-white py-6 mt-6">
              <div className="border-b-2 border-gray-200">
                <div className="flex px-6">
                  <button
                    className={ `${showTab.service ? 'border-b-2 border-orange' : ''} p-4` }
                    onClick={ () => setShowTab({tips: !showTab.tips, service: !showTab.service})}
                  >
                    Services
                  </button>

                  <button
                    className={ `${showTab.tips ? 'border-b-2 border-orange' : ''} p-4` }
                    onClick={ () => setShowTab({tips: !showTab.tips, service: !showTab.service})}
                  >
                    Tips on How to Use Viettonkin
                  </button>
                </div>
              </div>

              { showTab.service && <article className="px-6 py-10 text-sm leading-5 text-gray-700">
                <p className="mb-3">Nowadays there are so many phones that we can find it difficult to choose which one suits us, we have so many choices so little time and knowledge about the brands. Well, that's what I'm for, I will try to help you to find your ideal smartphone taking into account what you are looking for, your preferences or what you would use the mobile (to play, just to call or for work) and your budget.</p>
                <p className="mb-3">I will provide the following services:</p>

                <ul className="ml-4 sm:ml-6 list-disc">
                  <li>How to choose the smartphone, Tabs, Desktop & Laptop?</li>
                  <li>How to root your smartphone?</li>
                  <li>How to unlock the bootloader of your smartphone?</li>
                  <li>How to install custom ROMs on your smartphone?</li>
                  <li>I will also provide the link from where you can easily download the custom ROMs</li>
                  <li>How to install custom recovery on your smartphone?</li>
                  <li>How to install custom boot animations on your smartphone?</li>
                </ul>
              </article> }

              { showTab.tips && <article className="px-6 py-10 text-sm leading-5 text-gray-700">
                <p className="mb-3">Nowadays there are so many phones that we can find it difficult to choose which one suits us, we have so many choices so little time and knowledge about the brands. Well, that's what I'm for, I will try to help you to find your ideal smartphone taking into account what you are looking for, your preferences or what you would use the mobile (to play, just to call or for work) and your budget.</p>
              </article> }
            </div>
          </div>

          <div className="w-4/12 px-3">
            <div className="shadow-lg rounded-md pt-6">
              <h4 className="text-lg px-5">Selected Service</h4>

              <div className="flex justify-between text-gray-500 text-sm mt-5 pb-6 px-5 border-b">
                <span>IT Advisory</span>
                <span>¥ 7440 <i className="text-orange">*</i></span>
              </div>

              <div className="px-5 text-right mb-6 mt-3">
                <small className="text-xs text-gray-500">starting from</small>
                <div className="font-bold text-lg leading-none">¥ 7440</div>
              </div>

              <button className="bg-orange p-1 flex w-full rounded-b-md h-12 items-center justify-between">
                <div className="bg-white h-10 w-10 flex justify-center items-center rounded-bl-sm">
                  <Icon name="bookmark" color="#f58120" />
                </div>

                <div className="text-center w-full text-white">
                  ADD TO CART
                </div>
              </button>
            </div>

            <p className="px-6 mt-6 text-sm">
              <b className="text-orange">*</b> The rate provided is the cheapest estimate for this service. Final rate will depend on the needed service.
            </p>
          </div>
        </Row>
      </Container>

    </Fragment>
  );
}

export default ProfileProvider;
