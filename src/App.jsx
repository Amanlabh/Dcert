import {initJuno} from '@junobuild/core';
import {useEffect} from 'react';
import {Auth} from './components/Auth';
import {Background} from './components/Background';
import {Footer} from './components/Footer';
import {Modal} from './components/Modal';
import {Table} from './components/Table';
import NavigationBar from './components/NavigationBar';
// import About from './components/About';

function App() {
  useEffect(() => {
    (async () =>
      await initJuno({
        satelliteId: import.meta.env.VITE_SATELLITE_ID,
        container: import.meta.env.VITE_CONTAINER,
        workers: {
          auth: true
        }
      }))();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="relative isolate min-h-[100dvh]">
        <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]" style={{ backgroundColor: '#000000' }}>
        <h1 className="dark:text-white text-5xl md:text-6xl font-bold tracking-tight md:pt-8">
            {/* DeCert */}
          </h1>
          <Auth>
            <Table />

            <Modal />
            <h3 className="dark:text-white text-5xl md:text-4xl font-bold tracking-tight md:pt-8">
            About
          </h3>
          <h3 className="dark:text-white text-xl md:text-xl tracking-tight md:pt-8">
            A decentralized digital locker, revolutionizing the way individuals <br></br> store and manage their certificates and government-issued ID proofs.<br></br><br></br>
            Our platform harnesses the power of the Internet Computer Protocol<br></br> (ICP) network chain to provide an unparalleled level of security and<br></br> assurance to our users. Through this innovative technology, we<br></br> ensure that every document uploaded to our platform is safeguarded <br></br>with the highest standards of security, protecting sensitive information<br></br> from unauthorized access and tampering.
            <br></br><br></br>
            At our decentralized digilocker, users have the freedom to securely upload<br></br> and store their certificates and government-issued ID proofs, eliminating <br></br>the risks associated with traditional centralized storage systems. With our<br></br> platform, individuals can access their documents anytime, anywhere,<br></br> knowing that their data is protected by the decentralized architecture of <br></br>the ICP network chain.
          </h3>
          </Auth>
          
        </main>
        {/* <About/> */}

        <Footer />
        

        <Background />
      </div>
    </>
  );
}

export default App;
