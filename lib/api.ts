import { Website } from "@prisma/client";

export async function addWebsite(websiteData: Omit<Website, "id" | "createdAt" | "updatedAt">) {
  try {
    const response = await fetch("/api/websites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(websiteData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to add website");
    }

    return result.data;
  } catch (error) {
    console.error('Add website error:', error);
    throw error;
  }
}

export async function fetchWebsites() {
  try {
    const response = await fetch("/api/websites");
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || "Failed to fetch websites");
    }

    return result.data;
  } catch (error) {
    console.error('Fetch websites error:', error);
    throw error;
  }
}