export type NodeStatus = "completed" | "current" | "locked";

export interface CourseNode {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  status: NodeStatus;
  backgroundColor: string;
}

export interface CourseDetails {
  id: string;
  categoryId: string;
  title: string;
  subtitle: string;
  lessonCount: number;
  durationString: string;
  themeColor: string;
  progressPercentage: number;
  nodes: CourseNode[];
}
