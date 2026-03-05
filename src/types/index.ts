export interface Post {
  title: string;
  date: string;
  slug: string;
  body: string;       // HTML string for standard posts
  richHtml?: string;  // Full standalone HTML for richly styled posts
}
