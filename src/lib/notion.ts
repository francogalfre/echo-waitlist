import { Client } from "@notionhq/client";

export const notion = new Client({
    auth: process.env.NOTION_SECRET,
});

export const NOTION_DB_ID = process.env.NOTION_DB_ID || "";
