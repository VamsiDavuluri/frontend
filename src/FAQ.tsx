import React, { useState } from 'react';
import './FAQ.css';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does sahay do?",
      answer: "Sahay is a platform that helps connect donors with causes that need support. We ensure that your donations reach the right place and make a significant impact."
    },
    {
      question: "How can I donate online?",
      answer: "You can donate online through our secure payment gateway. Simply select the cause you want to support, choose your donation amount, and follow the instructions."
    },
    {
      question: "Is there a minimum donation amount?",
      answer: "No, there is no minimum donation amount. Every contribution, no matter how small, makes a difference."
    },
    {
      question: "How do I claim tax exemption against my donation?",
      answer: "You will receive a receipt for your donation which you can use to claim tax exemption under the relevant sections of the Income Tax Act."
    },
    {
      question: "What are the causes I can support through Sahay?",
      answer: "You can support various causes such as education, healthcare, disaster relief, and more. Browse through our platform to find a cause that resonates with you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>FAQs</h2>
      <p>Everything you need to know about our initiatives, if you have any other questions please reach out to us at: sahay@gmail.com</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span>{openFAQ === index ? '-' : '+'}</span>
            </div>
            {openFAQ === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
