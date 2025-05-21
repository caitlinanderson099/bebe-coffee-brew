
const PageHeader = ({ title, highlight, backgroundImage }) => {
  return (
    <div 
      className="page-header" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})` }}
    >
      <h1>
        {title} <span className="highlight">{highlight}</span>
      </h1>
    </div>
  );
};

export default PageHeader;
