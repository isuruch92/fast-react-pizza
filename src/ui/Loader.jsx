function Loader() {
  // return <div className="loader"></div>;

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="pizza">
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
      </div>
    </div>
  );
}

export default Loader;
