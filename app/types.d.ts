export interface WorkType {
  id: number;
  linkTo: string;
  imageURL: string;
  client: string;
  title: string;
}

export interface ServiceType {
  iconURL: string;
  name: string;
  description: JSX.Element;
}
