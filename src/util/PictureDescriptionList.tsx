import SparkLatte from "../assets/Gallery/SparkLatte.avif";
import TurretCoffeeTsukiji from "../assets/Gallery/TurretCoffeeTsukiji.avif";
import BlueBottleCoffeeShinagawa from "../assets/Gallery/BlueBottleCoffeeShinagawa.avif";
import RoarCoffeeHouse from "../assets/Gallery/RoarCoffeeHouse.avif";
import RoarCoffeeHouseRainbow from "../assets/Gallery/RoarCoffeeHouseRainbow.avif";
import GoldenGaiMatchaAndGin from "../assets/Gallery/GoldenGaiMatchaAndGin.avif";

export type PictureDescriptionType = {
  src: string;
  description: string;
};

export const PictureDescriptionList: PictureDescriptionType[] = [
  {
    src: SparkLatte,
    description:
      "Incredible mocha latte from Spark Coffee Roasters in Sendai, Japan! The flavor profile is deep and complex with mocha that delivers sweet notes that combine with and enhance the espresso. ¥800 ($5.50) 10/10",
  },
  {
    src: TurretCoffeeTsukiji,
    description:
      "The signature latte from Turret Coffee Tsukiji, the menu said the latte was bitter and it was right... although it's art was stunning I didn't find the flavor appealing. 6/10",
  },
  {
    src: BlueBottleCoffeeShinagawa,
    description:
      "Blue Bottle Coffee never disappoints, but this location in Shinagawa station gives good views of the people going about their daily life as you drink your coffee. 8/10",
  },
  {
    src: RoarCoffeeHouse,
    description:
      "Roar Coffee House's raspberry mocha latte is on another level from anything else I have experienced. Complex bitterness from the 2 shots of espresso was in no way overpowering, the mocha comes through with noticeable raspberry notes as well. The art was stellar, a swan design precisely made. 11/10",
  },
  {
    src: RoarCoffeeHouseRainbow,
    description:
      "Roar Coffee House allows you to choose the color of the background and an optional rainbow design on top. This background is called a 'charcoal base,' which makes the rainbow on top pop even more. It's art is great, but the taste is slightly chalky as a result, and my mouth was stained black. Overall, I'd rate this drink 9/10.",
  },
  {
    src: GoldenGaiMatchaAndGin,
    description:
      "Golden Gai has a great variety of small, locally-owned bars. One of them, whose name I don't remember, offered a Matcha and Gin drink. Unable to hold back my curiosity, I gave it a shot. It was just as you'd expect: a sweet matcha drink with a kick from the alcohol. I'd rate it 6/10.",
  },
];
