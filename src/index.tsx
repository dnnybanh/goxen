import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import 'tailwindcss/tailwind.css';
import logo from './logo.svg';
import heroImage from './assets/hero_image.svg';
import test1 from './assets/test1.svg';
import test2 from './assets/test2.svg';
import test3 from './assets/test3.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faComments, faFileContract } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "How does Let's Rent ensure the security of my data?",
    answer: "We prioritize your data's security. We use encryption to protect sensitive data and comply with all applicable privacy laws and regulations. Our platform undergoes regular security audits to ensure we maintain the highest standards."
  },
  {
    question: "What information do I need to share on the platform?",
    answer: "For tenants, we allow for self-reported income, credit, and background, along with your property preferences. For landlords, we need details about your property and your ideal tenant. This information helps us make accurate matches. Once a match is made and application are ready to be filed, we do ask Tenants for SSN to run Income, Credit, and Background Check"
  },
  {
    question: "Who will have access to my personal information?",
    answer: "Your personal data is only accessible to potential matches, and you have control over what information is visible on your profile. We never sell your data or use it for any purposes other than to facilitate the rental process."
  },
  {
    question: "Can I opt out of the automatic matching system?",
    answer: "Yes, our platform includes an optional toggle to disable the automatic matching system. This allows you to manually filter through the full list of users if you prefer."
  },
  {
    question: "What measures are in place to ensure compliance with privacy laws and regulations?",
    answer: "We have a dedicated legal team that ensures our practices align with privacy laws and regulations. We also provide regular training for our staff to ensure they understand and adhere to these laws and regulations."
  },
  {
    question: "How is my payment information handled?",
    answer: "We use a secure payment gateway to process any transactions. Your payment information is encrypted and never stored on our servers."
  }
];

const App = () => {
  const homeSection = useRef<HTMLElement>(null);
  const infoSection = useRef<HTMLElement>(null);
  const testimonialSection = useRef<HTMLDivElement>(null);
  const faqSection = useRef<HTMLElement>(null);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const scrollHome = () => { if (homeSection.current) homeSection.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }) }
  const scrollInfo = () => { if (infoSection.current) infoSection.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' }) }
  const scrollTestimony = () => { if (testimonialSection.current) testimonialSection.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' }) }
  const scrollFAQ = () => { if (faqSection.current) faqSection.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' }) }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 fixed w-full z-50 flex justify-center items-center">
        <div className='w-[1200px] flex items-center justify-between'>
          <a href="#home" onClick={scrollHome}>
            <img decoding="async" width="60" height="60" src={logo} alt="" loading="lazy" />
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a onClick={scrollHome} href="#home" className="text-gray-800 hover:text-blue-500">Home</a></li>
              <li><a onClick={scrollInfo} href="#info" className="text-gray-800 hover:text-blue-500">How It Works</a></li>
              <li><a onClick={scrollTestimony} href="#testimony" className="text-gray-800 hover:text-blue-500">Testimonials</a></li>
              <li><a onClick={scrollFAQ} href="#faq" className="text-gray-800 hover:text-blue-500">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-24 flex flex-col justify-center items-center">
        <section ref={homeSection} className="relative h-[700px] w-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative flex justify-between items-center p-8 w-[1200px] mx-auto">
            <div>
              <h1 className="text-4xl text-white">Find Your Perfect Rental Match with Ease</h1>
              <p className="text-2xl text-white mt-2">Join Goxen - The efficient tenant matching rental platform</p>
              <button onClick={scrollInfo} className="bg-blue-500 text-white py-4 px-8 rounded mt-4 hover:bg-blue-700">Learn More</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 w-4/12 rounded">
              <h2 className='px-4 text-2xl pb-8 text-center'>Sign Up and Find Your Ideal Landlord or Tenant</h2>
              <select {...register("userType")} className="w-full mb-4 bg-gray-200 p-2 rounded">
                <option value="tenant">Prospective Tenant</option>
                <option value="landlord">Landlord</option>
              </select>
              <input {...register("firstName")} placeholder="First Name" className="w-full mb-4 bg-gray-200 p-2 rounded" />
              <input {...register("lastName")} placeholder="Last Name" className="w-full mb-4 bg-gray-200 p-2 rounded" />
              <input {...register("email")} placeholder="Email" className="w-full mb-4 bg-gray-200 p-2 rounded" />
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded">Sign Up</button>
            </form>
          </div>
        </section>


        <section ref={infoSection} className='bg-gray-200 w-screen flex flex-col items-center'>
          <div className="w-[1200px] py-16">
            <h2 className="text-6xl font-bold mb-16 text-center">How it Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-white shadow-md rounded">
                <div className='flex mb-4'>
                  <FontAwesomeIcon icon={faUser} size="3x" />
                  <h3 className="font-bold text-lg mb-2 ml-4">Step 1: Create Your <br /> Profile</h3>
                </div>
                <p className="text-gray-700">Start your journey by creating a comprehensive profile. If you're a tenant, provide details about your income, credit, background, and property preferences. If you're a landlord, tell us about your property and your ideal tenant. Our secure platform keeps your data safe and private.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded">
                <div className='flex mb-4'>
                  <FontAwesomeIcon icon={faSearch} size="3x" />
                  <h3 className="font-bold text-lg mb-2 ml-4">Step 2: Discover Your Matches</h3>
                </div>
                <p className="text-gray-700">Our advanced matching algorithm takes the guesswork out of the rental process. Based on the information in your profile, we'll generate a list of potential matches. For those who prefer a hands-on approach, use the manual filtering option to browse through all available tenants or properties.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded">
                <div className='flex mb-4'>
                  <FontAwesomeIcon icon={faComments} size="3x" />
                  <h3 className="font-bold text-lg mb-2 ml-4">Step 3: Connect & Communicate</h3>
                </div>
                <p className="text-gray-700">Once you have your matches, it's time to connect. Landlords can invite potential tenants for property tours, both online and in-person. Tenants can apply directly through our platform. Our integrated communication tools make it easy to get in touch and keep the conversation going.</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded">
                <div className='flex mb-4'>
                  <FontAwesomeIcon icon={faFileContract} size="3x" />
                  <h3 className="font-bold text-lg mb-2 ml-4">Step 4: Finalize Your Agreement</h3>
                </div>
                <p className="text-gray-700">Found the perfect match? Finalize your rental agreement securely through our platform. We facilitate the entire process, from application to signing the contract. Enjoy peace of mind knowing you've found the right fit with Let's Rent.</p>
              </div>
            </div>
          </div>
          <div className="flex mt-6 mb-16">
            <button onClick={scrollHome} className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded">
              Sign Up Now
            </button>
          </div>
        </section>

        <div ref={testimonialSection} className="w-[1200px] my-16">
          <h2 className="text-6xl font-bold mb-16 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded">
              <div className='flex items-center mb-4'>
                <img className='rounded-full' alt="Jessica" src={test1} width={70} height={70} />
                <h3 className="font-bold text-lg mb-2 ml-4">Jessica, Tenant</h3>
              </div>
              <p className="text-gray-700">"As a tenant, the process of finding a rental that matches my needs has never been smoother. The user interface is intuitive, and the option to manually filter through properties gave me a sense of control. I found a place I now call home within a few days. Kudos to Let's Rent!"</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <div className='flex items-center mb-4'>
                <img className='rounded-full' alt="David" src={test2} width={70} height={70} />
                <h3 className="font-bold text-lg mb-2 ml-4">David, Property Owner</h3>
              </div>
              <p className="text-gray-700">"As a property owner, I've been looking for a reliable platform to find suitable tenants, and Let's Rent exceeded my expectations. The automatic matching system saved me hours of sifting through applications. I highly recommend it to other landlords!"</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <div className='flex items-center mb-4'>
                <img className='rounded-full' alt="Margaret" src={test3} width={70} height={70} />
                <h3 className="font-bold text-lg mb-2 ml-4">Margaret, Property Owner</h3>
              </div>
              <p className="text-gray-700">"I've been renting out properties for years, and Let's Rent has made the process so much easier. The communication tools are excellent, and I love how I can toggle between automatic matching and manual filtering. I've found some great tenants through this platform."</p>
            </div>
          </div>
        </div>

        <section ref={faqSection} className='bg-gray-200 w-screen flex flex-col items-center'>
          <div className="w-[1200px] my-16">
            <h2 className="text-6xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
            {faqData.map((faq, i) => (
              <div key={i}>
                <button onClick={() => handleToggle(i)} className="text-left w-full py-2 px-4 bg-blue-500 text-white rounded mt-5">
                  {faq.question}
                </button>
                {activeIndex === i ? (
                  <div className="border p-4 mt-4 bg-gray-100 rounded">
                    {faq.answer}
                  </div>
                ) : null}
              </div>
            ))}

          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white pt-4 pb-8 px-4">
        <div className="container mx-auto px-4 my-10 w-[1200px]">
          <div className="flex justify-between">
            <div>
              <a onClick={scrollHome} href="#home"><img decoding="async" width="60" height="60" src={logo} alt="" loading="lazy" /></a>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Contact Us</h4>
              <p>1234 W Rental Ave</p>
              <p>House, Rent 12345</p>
              <p>Email: goldenoxrealty@gmail.com</p>
              <p>Phone: (623) 282-2496</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Follow Us</h4>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold">Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
