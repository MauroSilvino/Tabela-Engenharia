export interface ICreateItemDTO {
  id: string;
  description: string;
  value: number | undefined;
  quantity?: number | undefined;
  unity: string | undefined;
  projectId?: number;
}
