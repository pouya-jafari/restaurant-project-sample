import Navbar from "./Navbar";
export default function Head() {
  return (
    <div className="banner">
      <Navbar />
      <div className="head-content">
        <h1>طنجه</h1>
        <p>طعم اصیل ایرانی</p>
        <div>
          <button type="button">
            <span></span>منو
          </button>
          <button type="button">
            <span></span>تماس بگیرید
          </button>
        </div>
      </div>
    </div>
  );
}
