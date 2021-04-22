//libreria per il fetch dei dati. Qua si usa gray-matter

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const blogDirectory = path.join(process.cwd(), "blog");

export function getSortedBlogData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogDirectory);
  const allBlogData = fileNames.map( (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { excerpt: true }); //per aggiungere il contenuto del post
    console.log(matterResult);
   /* const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    console.log(processedContent);
    const contentHtml = processedContent.toString();*/
    // Combine the data with the id
     
    return {
      id,
      content: matterResult.content,
      
      //si va a estrarre anche il contenuto
      ...matterResult.data, // combina tutti i dati in automatico
    };
  });
  // Sort posts by date
  return allBlogData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogDirectory);

  // Returns an array that looks like this:
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
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
export async function getBlogData(id) {
  const fullPath = path.join(blogDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
