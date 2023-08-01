export default function Main() {
    const [currentPage, setCurrentPage] = useState("AboutMe");
  
    const renderPage = () => {
      if (currentPage === "/") {
        return <Home />;
      }
      if (currentPage === "Portfolio") {
        return <Portfolio />;
      }
      if (currentPage === "Resume") {
        return <Resume />;
      }
      return <AboutMe />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }