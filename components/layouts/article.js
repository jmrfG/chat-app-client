import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children, title }) => {
  const t = `${title} - Jorge M.R. Farias`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}
        <style>
          {`
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background-color: #1a202c;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: #38a169;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background-color: #4fd1c5;
        }
      `}
        </style>
      </>
    </motion.article>
  );
};

export default Layout;
