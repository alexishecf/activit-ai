import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <video className="background-video" muted autoPlay loop playsInline>
        <source src="http://localhost:3000/bg.mp4" type="video/mp4"></source>
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="title">activit.ai</h1>
        <p className="mission">enhancing humans with custom agents</p>
        <a className="cta-button" href="mailto:alexis@hecfeuille.fr">
          Get in touch
        </a>
      </div>
      <style jsx>{`
        .container {
          position: relative;
          background-color: black;
          color: white;
          font-family: 'Helvetica', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          box-sizing: border-box;
        }

        .background-video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.98);
          z-index: 0;
        }

        .content {
          position: relative;
          z-index: 1;
          text-align: center;
          padding: 0;
        }

        .title {
          font-size: 5rem;
          font-weight: bold;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .mission {
          font-size: 1.5rem;
          font-weight: lighter;
          letter-spacing: 0.05em;
          margin-top: 0;
          margin-bottom: 2rem;
        }

        .cta-button {
          display: inline-block;
          background-color: #ffffff;
          color: #000;
          border: none;
          border-radius: 20px;
          padding: 12px 24px;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 3rem;
          }

          .mission {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
