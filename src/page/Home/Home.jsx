import { Header } from 'components/Header/Header';
import { StyledHomePage } from './Home.styled';
import { ReactComponent as ArrowTop } from '../../images/icon/arrow top.svg';
import { ReactComponent as Check } from '../../images/icon/сheck.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { variantsAnimTitle } from '../../services/animate';

export const Home = () => {
  return (
    <StyledHomePage>
      <div className="body">
        <Header />
        <div className="body__content">
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={variantsAnimTitle}
            className="body__title"
          >
            Make Life Easier for the Family:
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={variantsAnimTitle}
            className="body__text"
          >
            Find Babysitters Online for All Occasions
          </motion.p>
          <button className="body__btn">
            <Link to={'nannies'}>
              Get started
              <ArrowTop className="icon" />
            </Link>
          </button>
        </div>
        <div className="body__statistics ">
          <div className="body__statistics-icon">
            <Check />
          </div>
          <div className="body__statitics-content">
            <h3>Experienced nannies</h3>
            <p>15,000</p>
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};
