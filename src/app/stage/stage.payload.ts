export interface StagePayload {
  id: number;
  name: string;
  seq: number;
  description: string;
  nextStageID: number;
  nextStageName: string;
  prevStageID: number;
  prevStageName: string;
}

/*export interface StageSelectorPayload {
  ID: number;
  name: string;
}*/
