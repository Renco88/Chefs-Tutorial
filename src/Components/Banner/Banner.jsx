 import banner from '../../assets/Image/Banner.jpg'
 import './Banner.css'
const Banner = () => {
    return (
        <div >
             <div className="relative w-full h-72 bg-cover bg-center md:min-h-screen " style={{ backgroundImage: `url(${banner})` }}>
               <div className='flex flex-col items-center justify-center h-full  text-[#fff] space-y-4'>
               <h3 className='md:text-5xl md:font-bold text-2xl'>Discover an exceptional cooking <br /> class tailored for you!</h3>
               <p className=''>Welcome to Cheft, where culinary creativity meets expert guidance. <br /> Join our cooking classes </p>
               <div className=''>
                <button className='btn-primary'>Explore Now</button>
                <button>Our Feedback</button>
               </div>
               </div>
            </div> 
            
        </div>
    );
};

export default Banner;