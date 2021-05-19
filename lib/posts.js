//libreria per il fetch dei dati. Qua si usa gray-matter

import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import fs from "fs";
const blogDirectory = path.join(process.cwd(), "blog"); //cartella dove si trovano i markdown dei post

export function getSortedBlogData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogDirectory); //legge gli elementi che ci sono nella cartella dei blog post (array)
  const allBlogData = fileNames.map((fileName) =>
    getBlogDataFromFilename(fileName)
  ); //uso la funzione getBlogData per ogni fileName
  // Sort posts by date
  return allBlogData.sort((a, b) => {
    //ordinamento temporale dei post
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
function getBlogDataFromFilename(fileName) {//restituisce un oggetto con all' interno tutti i dati di un post
  // Remove ".md" from file name to get id
  const postId = fileName.replace(/\.md$/, "");//id del post che prende il nome dal nome del file (fileName) senza il .md che viene sostituito con il .replace da niente


  // Read markdown file as string
  const fullPath = path.join(blogDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents, { excerpt: true }); //per aggiungere il contenuto del post

  /* const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  console.log(processedContent);
  const contentHtml = processedContent.toString();*/
  // Combine the data with the id

  return { //output oggetto creato dalla funzione
    id: postId,//associo alla proprieta' id la costante postId definita sopra

    
    ...matterResult.data, // combina nell'oggetto tutti i dati presenti nei markdown dei post in automatico
  };
}
export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogDirectory);
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
