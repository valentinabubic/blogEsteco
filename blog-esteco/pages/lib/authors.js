import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const authorsDirectory = path.join(process.cwd(), 'authors')

export function getSortedAuthorsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(authorsDirectory)
  const allAuthorsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(authorsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents, { excerpt: true })

    // Combine the data with the id
    return {
      id,
      content: matterResult.content,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allAuthorsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
export function getAllAuthorsIds() {
    const fileNames = fs.readdirSync(authorsDirectory);
  
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
  export async function getAuthorsData(id) {
    const fullPath = path.join(authorsDirectory, `${id}.md`);
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
  