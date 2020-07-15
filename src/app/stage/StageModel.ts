export class StageModel {
  ID: bigint;
  name: string;
  description: string;
  nextStageID: bigint;
  nextStageName: string;
  prevStageID: bigint;
  prevStageName: string;
}
