const PersonalExpPopup = ({ open, close, data }) => {
  return (
    <div className="modal__container">
      <div className={`istambul_tm_modalbox ${open ? "opened" : ""}`}>
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={() => close()}>
              <i className="fa fa-times" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="news_popup_details">
              <div className="top_image">
                <img src="img/4-2.jpg" alt="" />
                <div
                  className="main"
                  data-img-url={data && data.img}
                  style={{ backgroundImage: `url(${data && data.img})` }}
                />
              </div>
              <div className="news_main_title">
                <h3>{data && data.title}</h3>
              </div>
              <div className="text">
                {data &&
                  data.des &&
                  data.des.map((des, i) => <p key={i}>{des}</p>)}
                <br/>
                {data.url && (
                  <a href={data.url} className="btn" target={"_blank"} style={{color: "white"}}>
                    <span>
                      <i className="fa fa-external-link" />
                      view project
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalExpPopup;
