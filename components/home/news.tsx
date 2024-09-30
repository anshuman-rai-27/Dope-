import React from 'react';

interface NewsItem {
  title: string;
  date: string;
  description: string;
  source: string;
  image: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    title: "India Launches New Anti-Doping Awareness Campaign",
    date: "2024-09-25",
    description:
      "NADA India organized a two-day Re-Accreditation Training Course for DCOs/BCOs from 2nd July to 3rd July, 2024. The session aimed to enhance the practical skills.",
    source: "Sports Ministry of India",
    image: "/news/news.jpeg",
    link: "https://www.sportsministry.gov.in/anti-doping-awareness"
  },
  {
    title: "NADA Strengthens Testing for National Championships",
    date: "2024-09-15",
    description:
      "The National Anti-Doping Agency (NADA) has increased testing measures at national sports events in India. The move comes as part of a broader effort to ensure drug-free competition at the highest levels of sports in the country.",
    source: "NADA India",
    image: "/news/news2.jpeg",
    link: "https://www.nadaindia.org/testing-measures"
  },
  {
    title: "Indian Athletes Pledge for Clean Sports at Commonwealth Games",
    date: "2024-08-10",
    description:
      "Indian athletes have taken an anti-doping pledge before the upcoming Commonwealth Games. The pledge, organized by the Indian Olympic Association, reflects India's commitment to fair competition.",
    source: "Indian Olympic Association",
    image: "/news/news3.jpeg",
    link: "https://www.ioa.org/anti-doping-pledge"
  },
  {
    "title": "Sports Authority of India to Increase Anti-Doping Workshops",
    "date": "2024-07-05",
    "description": "The Sports Authority of India (SAI) has announced an increase in anti-doping workshops across various sporting institutions. These workshops aim to educate young athletes on clean competition.",
    "source": "Sports Authority of India",
    "image": "/news/news4.jpg",
    "link": "https://www.sai.org/anti-doping-workshops"
  },
  {
    "title": "NADA Introduces Blood Testing for Elite Athletes",
    "date": "2024-06-15",
    "description": "In a significant move, NADA has introduced blood testing for elite athletes to detect any banned substances. This step ensures a more rigorous testing system in preparation for major international events.",
    "source": "NADA India",
    "image": "/news/news5.jpg",
    "link": "https://www.nadaindia.org/blood-testing"
  },
  {
    "title": "Indian Sports Federations Sign Clean Sports Pact",
    "date": "2024-05-30",
    "description": "Major Indian sports federations have signed a Clean Sports Pact, committing to maintain doping-free environments. This move is seen as a collective effort to promote fair play in Indian sports.",
    "source": "Indian Sports Federations",
    "image": "/news/news6.jpg",
    "link": "https://www.sportsfederations.in/clean-sports-pact"
  }
];

const NewsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 py-12">
      <h2 className="text-4xl font-bold py-8 text-center mb-10 text-indigo-600">News & Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((newsItem, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border-gray-500">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-blue-600">{newsItem.title}</h3>
              <p className="text-gray-500 mb-2">{newsItem.date}</p>
              <p className="text-gray-700 mb-4">{newsItem.description}</p>
              <a
                href={newsItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
