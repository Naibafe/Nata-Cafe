import SideBar from "../components/SideBar";

function MainBody({ children }) {
  return (
    <div className="mainBody">
      <SideBar />
      <div className="childrenContainer">{children}</div>
    </div>
  );
}

export default MainBody;
