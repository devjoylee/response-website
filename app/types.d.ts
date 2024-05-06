export interface WorkType {
  id: number;
  likeTo: string;
  imageURL: string;
  client: string;
  title: string;
}

export interface ServiceType {
  iconURL: string;
  name: string;
  description: JSX.Element;
}
