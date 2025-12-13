import React, { useState } from "react";
import "./faqs.css";

function Faqs() {
  const data = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month."
    },
    {
      question: "Where can I watch?",
      answer : "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is Netflix good for Kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const handleClick = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); 
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Frequently Asked Questions</h2>

      {data.map((item, index) => (
        <div className="faqs_item" key={index}>
          <div className="question" onClick={() => handleClick(index)}>
            <span>{item.question}</span>
            <i
              className={
                openFaq === index
                  ? "fa-solid fa-times"
                  : "fa-solid fa-plus"
              }
            ></i>
          </div>

          {openFaq === index && (
            <div className="answer active">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faqs;
