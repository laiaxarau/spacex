import type { SpaceXAbout } from "@/types/about";
import type { SpacexLaunches } from "../types/launches/types";
import type { SpacexRocket } from "../types/rockets/types";
import type { SpacexRocketV4 } from "@/types/rocketsV4";
import type { SpacexHistory, SpacexInfo } from "@/types/index";

export const getRockets = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/rockets");
  const data = (await response.json()) as SpacexRocket[];
  return data;
};

export const getLaunches = async () => {
  const response = await fetch("https://api.spacexdata.com/v3/launches");
  const data = (await response.json()) as SpacexLaunches[];

  return data.filter(launch=> launch.links.mission_patch_small !== null)
  .sort((a, b) => (
    b.launch_date_unix - a.launch_date_unix
  )).slice(0,12);
};

export const getRocketsV4 = async () => {
  const response = await fetch ("https://api.spacexdata.com/v4/rockets");
  const data = (await response.json()) as SpacexRocketV4[];
  return data;
}

export const getCompanyInfo = async () => {
  const response = await fetch ("https://api.spacexdata.com/v3/info");
  const data =(await response.json()) as SpacexInfo;
  return data;
}

export const getCompanyHistory = async () => {
  const response = await fetch ("https://api.spacexdata.com/v3/history");
  const data = (await response.json()) as SpacexHistory[];
  return data.filter((article)=> article.flight_number !== null).sort((a,b)=>(b.event_date_unix - a.event_date_unix)).slice(0,3)
 
}

export const getPhotoIndex = async () => {
  const response = await fetch ("https://api.spacexdata.com/v3/rockets/starship/");
  const data = (await response.json()) as SpacexRocket;
  return data.flickr_images[3];
}

export const getPhotoArticle = async (id: string) => {
  const response = await fetch (`https://api.spacexdata.com/v3/launches/${id}` );
  const data = (await response.json()) as SpacexLaunches;
  return data.links.flickr_images[2];
}