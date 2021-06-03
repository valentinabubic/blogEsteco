//libreria per il fetch dei dati. Qua si usa gray-matter

import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import fs from "fs";


export async function getSortedBlogData() {
  const res = await fetch(`https://www.esteco.com/next/blog-content.json`);
  const allBlogData = await res.json();
  return allBlogData.sort((a, b) => {
    //ordinamento temporale dei post
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllBlogIds() {
  const allBlogData = await getSortedBlogData();
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return allBlogData.map((element) => {
    return {
      params: {
        id: element.id,
      },
    };
  });
}

  
export async function getBlogData(id) {
  
  const allBlogData = await getSortedBlogData();
  const singlePost = allBlogData.find(x => x.id === id);
  

 
  return {
    
    singlePost,
    
  };
}

export async function getAuthorPosts(authorsKey) {
  let result = [];
  const fileNames = fs.readdirSync(blogDirectory);
  fileNames.forEach((fileName) => {
    // Remove ".md" from file name to get id
    const postId = fileName.replace(/\.md$/, "");
    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName);
    const postRawContent = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const postMatter = matter(postRawContent, { excerpt: true });

    if (
      authorsKey === postMatter.data.authorsKey ||
      postMatter.data.authorsKey.includes(authorsKey)
    ) {
      result.push({ ...postMatter, postId });
    }
  });
  return result;
}
