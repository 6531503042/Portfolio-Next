import { cache } from "react";

//Attributes
const revalidate = 60;
const MINUTES_5 = 60 * 5;
const HOURS_1 = 60 * 60;
const HOURS_12 = 60 * 60 * 12;

//Function and Method

//Switching between info for auth user & other users
export async function getUser (username: string) {
    console.log("Fetching user data for", username);
    console.time("getUser");
    const res = await fetch("https://api.github.com/users/" + username, {
        headers: { Authorization: `Bearer &{process.env.GH_TOKEN}`},
        next: { revalidate: revalidate },
    });
    console.timeEnd("getUser");
    return res.json();
}

//Fetching get Repo
export async function getRepo(username: string) {
    console.log("Fetching repo for", username);
    console.time("getRepo");
    const res = await fetch(
        "https://api.github.com/users" + username + "/repo",
        {
            headers: { Authorization: `Bearer &{process.env.GH_TOKEN}`},
            next: { revalidate: revalidate },
        }
    );
    console.timeEnd("getRepo");
    return res.json();
}

//Fetching social account
export async function getSocialAccounts(username: string) {
    console.log("Fetching social account for", username);
    console.time("getSocialAccounts");
    const res = await fetch(
        "https://api.github.com/users" + username + "/social_accounts",
        {
            headers: { Authorization: `Bearer &{process.env.GH_TOKEN}`},
            next: { revalidate: MINUTES_5 },
        }
    );

    console.timeEnd("getSocialAccounts");
    return res.json();
}

export const getPinnedRepo = cache(async (username: string) => {
    console.log("Fetching pinned repo for", username);
    console.time("getPinnedRepo");
    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
        body: JSON.stringify({
            query: `{user(login: "${username}") {pinnedItems(first: 6, types: REPOSITORY) {nodes {... on Repository {name}}}}}`,
        }),
    });
    const pinned = await res.json();
    console.timeEnd("getPinnedRepo");
    const names = pinned.data.user.pinnedItems.nodes.map(
        (node: any ) => node.name
    );
    return names;
});

export const getRecentUserActivity = cache(async (username: string) => {
    console.log("Fetching recent user activity for", username);
    console.time("getRecentUserActivity");
    const res = await fetch (
        "https://api.github.com/users/" + username + "/events",
        {
            headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
            next: { revalidate: HOURS_12 },
        }
    );
    const response = await res.json();
    console.timeEnd("getRecentUserActivity")
    return response;
});

export const getTrafficPageViews = async (
    username: string,
    reponame: string
  ) => {
    const res = await fetch(
      "https://api.github.com/repos/" +
        username +
        "/" +
        reponame +
        "/traffic/views",
      {
        headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
        next: { revalidate: HOURS_1 },
      }
    );
    const response = await res.json();
  
    const sumUniques = response.uniques || 0;
  
    // Today date in format YYYY-MM-DD.
    const today = new Date().toISOString().slice(0, 10);
    // Last day with at least one view.
    const todayUniques =
      response.views?.find((day: any) => day.timestamp.startsWith(today))
        ?.uniques || 0;
  
    return { sumUniques, todayUniques };
  };

export const getVercelProjects = async () => {
    if (!process.env.VC_TOKEN) {
      console.log("No Vercel token found - no projects will be shown.");
      return { projects: [] };
    }
    console.log("Fetching Vercel projects");
    console.time("getVercelProjects");
    const res = await fetch("https://api.vercel.com/v9/projects", {
      headers: { Authorization: `Bearer ${process.env.VC_TOKEN}` },
    });
    console.timeEnd("getVercelProjects");
    // eg. expired token.
    if (!res.ok) {
      console.error("Vercel API returned an error.", res.status, res.statusText);
      return { projects: [] };
    }
    return res.json();
  };
  



