import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      
    ]
  },
  {
    title: "help",
    links: [
     
    ]
  },
  {
    title: "policy",
    links: [
      
    ]
  },
  {
    title: "social",
    links: [
      
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-4 sm:px-12 bg-primary-darkBlue text-white text-xs border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
           

            {/* <div className="border-gray-600 h-36 w-1 border-l mr-5 mt-6 hidden sm:block"></div> */}
            <div className="w-full sm:w-12/12 my-6 mx-5 sm:mx-0 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Mail Us:</h2>
                <p className="mt-2 leading-5">42, Connaught Place,<br />
                  Near Rajiv Chowk Metro Station,<br />
                  New Delhi, 110001,<br />
                  Delhi, India
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">Registered Office Address:</h2>
                <p className="mt-2 leading-5">42, Connaught Place,<br />
                  Near Rajiv Chowk Metro Station,<br />
                  New Delhi, 110001,<br />
                  Delhi, India<br />
                  
                  Telephone: <a className="text-primary-blue" href="tel:1234567890">1234567890</a>
                </p>
              </div>
            </div>

          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue hidden sm:flex justify-between items-center text-sm text-white">
           

            <span>&copy; 2026 capstone project by Vishal Mehra</span>
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
