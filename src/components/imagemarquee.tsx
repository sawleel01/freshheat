import Marquee from "react-fast-marquee";

export default function Imageslider() {
  return (
    <div className="bg-gray-200 py-20">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        <img src="/writtenrestaurant.png" alt="img1" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img2" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img3" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
        <img src="/writtenrestaurant.png" alt="img4" className="h-24 mx-8" />
      </Marquee>
    </div>
  );
}
