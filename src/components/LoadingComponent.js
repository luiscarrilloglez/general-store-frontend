import "components/LoadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="text-center">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
