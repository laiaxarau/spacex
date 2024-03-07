import type { SpacexLaunches } from "../types/launches/types";
import type { SpacexRocket } from "../types/rockets/types";

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