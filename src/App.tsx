import Navbar from "./components/Navbar";
function App() {
  return (
    <>
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
        <div className=""></div>
      </div>
    </>
  );
}

export default App;
