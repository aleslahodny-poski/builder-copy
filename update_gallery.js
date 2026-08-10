import * as fs from 'fs'

const siteTsFile = 'c:/antigravity/builder-copy/src/data/site.ts'
let content = fs.readFileSync(siteTsFile, 'utf8')

// We will replace all gallery definitions to use Array().fill() of the project's hero image URL.
// Since we have 6 projects, we can safely just do a regex replace matching the image string.

// RegEx logic: find image: '...' and then gallery: [...] 
// we will replace the whole gallery: [...] block inside each project object.

const projectsMatch = content.match(/export const projects: Project\[\] = \[([\s\S]*?)\]\n\nexport const/);
if (projectsMatch) {
  let innerProjects = projectsMatch[1];
  
  // parse it block by block or regex
  // regex: image: '(.*?)'(?:.|\n)*?gallery: \[((?:.|\n)*?)\],
  // Wait, replacing using string operations
  let count = 0;
  innerProjects = innerProjects.replace(/image:\s*'([^']+)',\s*gallery:\s*\[[\s\S]*?\],/g, (match, imageStr) => {
    count++;
    const numImages = count % 2 === 0 ? 10 : 15;
    return `image: '${imageStr}',
    gallery: Array(${numImages}).fill('${imageStr}'),`;
  })
  
  content = content.replace(projectsMatch[1], innerProjects);
  fs.writeFileSync(siteTsFile, content);
  console.log('Done replacing site.ts gallery variables!');
}
