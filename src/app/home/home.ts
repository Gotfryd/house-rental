import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housinglocation";
import { Housing } from "../housing.service";

@Component({
  selector: "app-home",
  imports: [HousingLocation],
  templateUrl: "./home.html",
  styleUrls: ["./home.css"],
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];

  housingService: Housing = inject(Housing);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    alert(this.housingLocationList.length);
  }
}
