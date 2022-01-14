import {SightData} from "./SightData";

export class SeaBattleSight {
  constructor(private sightData: SightData) {
    sightData.leftIndent = sightData.leftIndent ? sightData.leftIndent : 0;
    sightData.isDisabled = sightData.isDisabled ? sightData.isDisabled : false;
  }
}
