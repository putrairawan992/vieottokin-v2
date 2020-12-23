import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'components/Grid';
import Breadcrumb from 'components/Breadcrumb';
import Icon from 'icon';

const category = [
  {
    label: 'General Inquiry',
    id: 'general',
    content: [{
      question: 'How is the weather today?',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }, {
      question: 'How is the weather today??',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }, {
      question: 'How is the weather today?',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }]
  }, {
    label: 'Refunds',
    id: 'refund',
    content: [{
      question: 'How is the Refunds today?',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }, {
      question: 'How is the Refunds today??',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }, {
      question: 'How is the Refunds today?',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }]
  }, {
    label: 'Partnerships',
    id: 'partnership',
    content: [{
      question: 'How is the weather today?',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }, {
      question: 'How is the weather today??',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }, {
      question: 'How is the weather today?',
      answer: 'It’s been really rainy lately, probably because it’s July - rain season'
    }]
  }
]

const buttonCategory = "md:block md:w-full text-left border rounded-md px-3 py-2 mr-2 md:px-5 md:py-3 mb-3";

const FAQ = () => {
  const [inCategory, setInCategory] = useState('general');
  const [openAnswer, setOpenAnswer] = useState({});

  const toggleAnswer = id => {
    setOpenAnswer(prevOpen => ({
      ...prevOpen,
      [id]: !prevOpen[id]
    }));
  };

  return (
    <Fragment>
      <Breadcrumb base={[ 'Home' ]} current="FAQ" />

      <Container className="py-20">
        <Row>
          <Col md={3} className="md:px-8 md:border-r-2 mb-6 md:m-0">
            { category.map((item, i) => (
              <button
                onClick={ () => setInCategory(item.id) }
                className={ `${inCategory === item.id ? 'border-orange' : 'border-gray-300'} ${buttonCategory}` }
                key={ i }
              >
                { item.label }
              </button>
            )) }
          </Col>

          <Col md={9} className="md:px-8 md:min-h-screen">
            { category.filter(find => find.id === inCategory)[0].content.map((item, i) => (
              <div
                className={ `${openAnswer[i] ? 'border-orange' : 'border-gray-400 mb-2'} border rounded-md mb-3 py-3 px-4` }
                key={ i }
              >
                <button
                  className="w-full flex justify-between items-center"
                  onClick={ () => toggleAnswer([i]) }
                >
                  <span className={ `${openAnswer[i] ? 'text-orange' : 'text-gray-800'} font-medium` }>
                    { item.question }
                  </span>

                  <Icon name="triangle" color="#333" size={10} />
                </button>

                { openAnswer[i] && <p className="mt-3 text-gray-500">{ item.answer }</p> }
              </div>
            )) }
          </Col>
        </Row>
      </Container>

    </Fragment>
  );
}

export default FAQ;
