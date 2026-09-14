import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getCourses, getUniversitiesForCourse, getAllProjectSlugs, getTools, getUniversities } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/courses", "/projects", "/notes", "/tools", "/universities", "/about", "/contact", "/privacy", "/terms", "/disclaimer", "/recommendations"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })
  );

  const courses = await getCourses();
  const courseRoutes = courses.map((c) => ({
    url: `${siteConfig.url}/courses/${c.slug}`,
    lastModified: new Date(),
  }));

  const courseUniversityRoutes = (
    await Promise.all(
      courses.map(async (c) => {
        const unis = await getUniversitiesForCourse(c.slug);
        return unis.map((u) => ({
          url: `${siteConfig.url}/courses/${c.slug}/${u.slug}`,
          lastModified: new Date(),
        }));
      })
    )
  ).flat();

  const universities = await getUniversities();
  const universityRoutes = universities.map((u) => ({
    url: `${siteConfig.url}/universities/${u.slug}`,
    lastModified: new Date(),
  }));

  const projectSlugs = await getAllProjectSlugs();
  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${siteConfig.url}/projects/${slug}`,
    lastModified: new Date(),
  }));

  const tools = await getTools();
  const toolRoutes = tools.map((t) => ({
    url: `${siteConfig.url}/tools/${t.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...courseRoutes,
    ...courseUniversityRoutes,
    ...universityRoutes,
    ...projectRoutes,
    ...toolRoutes,
  ];
}
