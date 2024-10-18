"use client";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
// Components
import NavigationMenu from "../../components/Navbar";
import SubBanner from "../../components/SubBanner";
import FooterComponent from "../../components/Footer";

// Helper Utils
import { dateHelper } from "../../utils/helper";

// CSS
import classes from "../page.module.scss";

// Constant
import { BLOG_CONTENT } from "../../constants/blog";
import { useState } from "react";



export default function BlogDetails() {
    const [content, setBlogContent] = useState(BLOG_CONTENT[0]);

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Blog Details'} route={'Blog'} subRoute={`Blog Details`}/>

        <div className={classes.blogDetailsContainer}>
          <div className="container">
            <h3>{content.title}</h3>
            <Image src={content.imageUrl} />
            <div className={classes.dynamicContentBlog} dangerouslySetInnerHTML={{__html:content.content}}></div>
          </div>
        </div>
        <FooterComponent />
    </div>
  );
}
