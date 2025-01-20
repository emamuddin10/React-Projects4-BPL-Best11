import logo from "../../assets/logo.png";
import bannerImg from "../../assets/banner-main.png";
import bgImg from "../../assets/bg-shadow.png";
import doller from "../../assets/Currency.png"
// import cobi from "../../assets/images.jpg"
const Nav = ({handleAddMoney,money}) => {
  return (
    <nav className="">
      <div className="flex justify-between py-5 ">
        <img src={logo} alt="" />
        <div className="flex list-none gap-3 items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Feature</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Shedules</a>
          </li>
          <button className="flex items-center gap-x-1 border-2  px-3 y-2 rounded-lg">{money} Coin<img src={doller} alt="" /></button>
          
        </div>
      </div>

      {/* Banner */}
      <div className="text-center rounded-md" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="bg-black opacity-70 text-white p-32 space-y-8 rounded-md">
          <img className="text-center mx-auto" src={bannerImg} alt="" />
          <h2 className="text-2xl">Assemble Your Ultimate Dream 11 Cricket Team </h2>
          <p>Beyond Boundaries Beyond Limits</p>
          <button onClick={handleAddMoney} className="bg-yellow-300 border-2 border-red-100-100 px-3 py-2 rounded-xl ">Claim Free Credit</button>
          <hr />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
