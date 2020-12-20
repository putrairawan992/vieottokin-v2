import React, { Fragment, useState } from 'react';
import { Container, Row } from 'components/Grid';
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
        <Row className="-mx-3">
          <div className="w-3/12 px-8 border-r-2">
            { category.map((item, i) => (
              <button
                onClick={ () => setInCategory(item.id) }
                className={ `${inCategory === item.id ? 'border-orange' : 'border-gray-300'} block w-full text-left border rounded-md px-5 py-3 mb-3` }
                key={ i }
              >
                { item.label }
              </button>
            )) }
          </div>

          <div className="w-9/12 px-8 min-h-screen">
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
          </div>
        </Row>
      </Container>

    </Fragment>
  );
}

export default FAQ;
