import ButtonPrimary from "./buttons/ButtonPrimary.jsx";
import ButtonSecondary from "./buttons/ButtonSecondary.jsx";
import ButtonAccent from "./buttons/ButtonDefault.jsx";
import ButtonDefault from "./buttons/ButtonAccent.jsx";
import Nav from "./Nav.jsx";

function App() {
  return (
    <>
      {/* <Nav />
      <div className="space-x-4 mt-40 flex justify-center">
        <ButtonPrimary />
        <ButtonSecondary />
        <ButtonDefault />
        <ButtonAccent />
      </div> */}
      <div className="flex justify-center items-center h-screen">
        <ButtonPrimary />
      </div>
    </>
  );
}

export default App;
