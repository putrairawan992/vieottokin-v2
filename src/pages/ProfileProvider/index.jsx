import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'lib/elements/Grid';
import Breadcrumb from 'lib/components/Breadcrumb';
import PriceTagPanel from './PriceTagPanel';
import Icon from 'icon';
import { read } from 'utils/api';

const ProfileProvider = () => {
  const [showTab, setShowTab] = useState({service: true, tips: false});
  const [service, setService] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const resService = await read(`services/${id}`);
      const resCategory = await read('categories');
      resCategory.data.map(({ SubCategory }) => setCategory(state => [...state, ...SubCategory]));
      setService(resService.data);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Breadcrumb base={[ 'Home', 'Services', 'IT Advisory' ]} current="Search" />

      <Container className="py-20">
        <Row>
          <Col md={8}>
            <div className="shadow-lg rounded-md md:p-6 flex">
              <img
                src="/images/tech-dojo.jpg"
                alt="tech dojo"
                className="mr-1 md:mr-5 rounded-l-md object-cover"
              />

              <div className="w-full my-auto md:p-0 p-2">
                <div className="flex justify-between w-full">
                  <h1 className="font-bold text-lg capitalize">{ service.partner?.companyName }</h1>

                  <span className="bg-orange py-1 px-4 text-xs text-white flex items-center uppercase">
                    { category && category.filter(find => find.id === service.categoryId)[0].name }
                  </span>
                </div>

                <div className="flex w-full items-center my-4">
                  <Icon name="badge" color="#f5821f" />

                  <span className="text-gray-500 text-xs ml-3">
                    <b>{ service.trustedBy || 0 }</b> business trusted Viettonkin for this service
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
          </Col>

          <Col md={4} className="md:mt-0 mt-8">
            <PriceTagPanel
              currency={service.currencySymbol}
              price={service.minimumPrice}
              category={category && category.filter(find => find.id === service.categoryId)[0].name}
            />
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
}

export default ProfileProvider;
