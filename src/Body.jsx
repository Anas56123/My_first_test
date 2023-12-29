import Aside from "./Aside";
import Header from "./Header";
import Main from "./MainApp";

export default function Body() {
  return (
    <>
      <Header />
      <div id="bodyFlex">
        <Aside />
        <Main />
      </div>
    </>
  );
}
