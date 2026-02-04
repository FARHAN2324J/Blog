export interface PostProps {
  id: number;
  image: string;
  title: string;
  content: string;
  description: string;
  read_time: number;
  publish_date: string;
  topic: string;
  slug?: string;
}