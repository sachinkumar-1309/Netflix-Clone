import React from "react";
import FaqList from "./FaqList";
// import FaqList from "./FaqList";

function Faqs() {
  const datas = [
    {
      question: "What is Netflix?",
      paragraph1:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      paragraph2:
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
      question: "How much Netflix costs?",
      paragraph1:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.",
      paragraph2: "",
    },
    {
      question: "Where can i watch?",
      paragraph1:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      paragraph2:
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do i cancel?",
      paragraph1:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      paragraph2: "",
    },
    {
      question: "What can i watch on Netflix?",
      paragraph1:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      paragraph2: "",
    },
    {
      question: "Is Netflix good for kids?",
      paragraph1:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      paragraph2:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  return (
    <ul className="w-full">
      <h2 className="text-3xl text-white tracking-tighter font-semibold mb-3">
        Frequently Asked Questions
      </h2>
      {datas.map((data) => (
        <li key={data.question} className="w-full mb-2">
          <FaqList data={data} />
        </li>
      ))}
    </ul>
  );
}

export default Faqs;
