import React from 'react'
import "./Widgets.css"
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import 'bootstrap/dist/css/bootstrap.min.css';

function Widgets() {
  const newsArticle = (heading,subtitle) => (
    <div className="widget_article">
      <div className="widget_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widget_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    )
  
  return (
    <div className='widgets d-none d-md-block'>
        <div className="widgets_header text-center d-flex py-3 px-1">
            <h2>Latest News around you</h2>
            <InfoIcon />
        </div>
        <div>
        {newsArticle("It's mansoon Again","Top news - Do just visit")}
        {newsArticle("It's mansoon Again","Top news - Do just visit")}
        {newsArticle("It's mansoon Again","Top news - Do just visit")}
        {newsArticle("It's mansoon Again","Top news - Do just visit")}
        {newsArticle("It's mansoon Again","Top news - Do just visit")}
        {newsArticle("It's mansoon Again","Top news - Do just visit")}
        {newsArticle("It's mansoon Again","Top news - Do just visit")}
        </div>
    </div>
  )
}

export default Widgets