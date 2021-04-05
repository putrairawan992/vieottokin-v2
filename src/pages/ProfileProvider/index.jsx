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
      setService(resService.data);

      if (resService.data.partner.categoryId) {
        const resCategory = await read(`categories/${resService.data.partner.categoryId}/child`);
        setCategory(resCategory.data.filter(find => find.id === resService.data.categoryId)[0].name);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Fragment>
      <Breadcrumb base={[ 'Home', 'Services', 'IT Advisory' ]} current="Search" />

      <Container className="py-20">
        <Row>
          <Col md={8}>
            <Row className="shadow-lg rounded-md md:p-6 flex mx-0">
              <Col md={2}>
                <img
                  src={ service.partner?.avatar }
                  alt={ service.partner?.companyName }
                  className="rounded-full object-cover w-28 h-28"
                />
              </Col>

              <Col md={10} className="my-auto md:pl-3 pl-0">
                <div className="flex justify-between w-full">
                  <h1 className="font-bold text-lg capitalize">{ service.partner?.companyName }</h1>

                  <span className="bg-orange py-1 px-4 text-xs text-white flex items-center uppercase">
                    { category }
                  </span>
                </div>

                <div className="flex w-full items-center my-4">
                  <Icon name="badge" color="text-orange" />

                  <span className="text-gray-500 text-xs ml-3">
                    <b>{ service.trustedBy || 0 }</b> business trusted Viettonkin for this service
                  </span>
                </div>

                <p className="text-xs text-gray-500">{ service.partner?.description }</p>
              </Col>
            </Row>

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
                <p>{ service.description }</p>
              </article> }

              { showTab.tips && <article className="px-6 py-10 text-sm leading-5 text-gray-700">
                <p className="mb-3">Nowadays there are so many phones that we can find it difficult to choose which one suits us, we have so many choices so little time and knowledge about the brands. Well, that's what I'm for, I will try to help you to find your ideal smartphone taking into account what you are looking for, your preferences or what you would use the mobile (to play, just to call or for work) and your budget.</p>
              </article> }
            </div>
          </Col>

          <Col md={4} className="md:mt-0 mt-8">
            <PriceTagPanel
              currency={ service.currencySymbol }
              price={ service.minimumPrice }
              category={ category }
            />
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
}

export default ProfileProvider;
