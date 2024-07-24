import Booklist from "../components/booklist/Booklist";

function Home(props) {
  return (
    <>
      <Booklist booksList={props.bProps} />
    </>
  );
}

export default Home;
