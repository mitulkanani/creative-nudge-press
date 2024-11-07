import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function getPostMetaData(basepath: string) {
  const folder = path.join(process.cwd(), basepath);
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'));

  //get file data
  const posts = markdownPosts?.map((filename) => {
    const fileContents = fs.readFileSync(`${basepath}/${filename}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult?.data?.title,
      date: matterResult?.data?.date,
      description: matterResult?.data?.description,
      coverImage: matterResult?.data?.coverImage,
      backgroundImage: matterResult?.data?.backgroundImage,
      btnText: matterResult?.data?.btnText,
      author: matterResult?.data?.author,
      slug: filename.replace(/\.mdx$/, ''),
    };
  });
  return posts;
}
