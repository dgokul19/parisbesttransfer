"use client";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
// Components
import NavigationMenu from "../components/Navbar";
import SubBanner from "../components/SubBanner";
import FooterComponent from "../components/Footer";

// Helper Utils
import { dateHelper } from "../utils/helper";

// CSS
import classes from "./page.module.scss";

// Constant
import { BLOG_CONTENT } from "../constants/blog";



export default function BlogPage() {
  

  return (
    <div className={classes.page}>
        <NavigationMenu />        
        <SubBanner title={'Blog'} route={'Blog'}/>

        <div className={classes.blogContainer}>
          <div className="container">
            <h3>Recent Articles</h3>

            <div className={classes.blogContentRow}>
                {
                  BLOG_CONTENT.map(blog => {
                    return (
                      <div className={classes.blogBox} key={blog.id}>
                        <div className={classes.blogImg}>
                          <Image src={blog.imageUrl} />
                          <div className={classes.renderTags}>{blog.tags}</div>
                        </div>

                        <div className={classes.blogContent}>
                            <ul className={classes.blogInfo}>
                              <li><i className="fa fa-user-o"></i> {blog.author || `admin`}</li>
                              <li><i className="fa fa-calendar-o"></i> {dateHelper(blog.created_at)}</li>
                            </ul>
                            <h4>{blog.title}</h4>
                            <p>{blog.short_desc}</p>
                            <Link href={`/blog/${blog.id}`}> Readmore</Link>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
          </div>
        </div>
        <FooterComponent />
    </div>
  );
}
