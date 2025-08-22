const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0h2a3VlVzVvQzBSNUI5cm51b3JJcVhxdng3eDlNUnBBTHlKdjlQQjlrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM29xTkpCRzUyUWtCT1AxT0kwazBzYi9vdWt2NndReFMyRUZpeStBL3EwRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTVlpSDgzY01XdWtSRFp1YTJ0c1F4ZjJsUjlJQWlFNkgwRENlWEtQT0ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUFNKNjJ5Nm5jNkdPdHhYVndFdldUMHEvZ0d3SFNlTU5tbjdzemg5cjJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QWGJNYW9UMkNGRVdzcHFQSm42bkdIdWJJdkUyQ2xaZWxUTEdrR2tXMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBlQ1NFM0lyQmxISkdJRlZ4QWxNRSt3Z1o0MHVUQXpFNTh2M3VFeHliSGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0p3VFBDc3ZnQm5EWnBqbUJaQVRsajVrMzlGejNjTUhyOXJUS0pYL2swQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3ljNE5mcXhPbzBKWWF5N0ZlbmhHOWs0OUk3TVhpUVZXWDByRGw5TG4xcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXZXFsU2tVRG42dmd6OFEwdkFDeHRSMHUrV3NZZkw0ZUo0NVo4MGVmN1JuRFJMNjRyVDhRSFlMVHQvSlB1bVhuZ0dUdlV0bWFEclgzeVJ0Q1R4OGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IlJTYVBSOHIyVDdDNzdrZmRUaEhJdTNVSjhzckY5QXNGZXlpbThTdzlkZms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjMzNzcwODMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI1QTMyOUFBMDcwODBDNDk5MDU2RUJCNjZBOEY3MzUyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU4NDg3Njd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIzMzc3MDgzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNEZGMTExNDUxNTE5RkY5QzIyNEM0RUMyMUI1NDhCRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1ODQ4NzY3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiOTIzMjMzNzcwODMzOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTQ5NjMxMjQ3Mjc4NTY6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05EcXZOSUJFTG5Bb01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImJWWVQ5M3FZbUNIejhmc3BRNEJRN09jeXFMSTAzR2ZlOWhkRmtubW44V0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1ybElmYXdpWkhwbWJ0cENYWk51UmhHb0Z5cTY1bmgyVDJLalB2cGdXOTZyUHpuS2FaNnN0RmtJeTdHNWFxR0RxTUFxUUMzbFhEMXltNFVsNXppbEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5Sld0U055OTNxOHdCbEd6WmNRRGtXNGlkejhhRVJadDh1aWNEenZieUxONjNOOFFOTW5uVkhqUCtFeERGbmgxY2d6c3U4Ym9LbzEyTGxDSGdsMmxpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzIzMzc3MDgzMzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlcxV0UvZDZtSmdoOC9IN0tVT0FVT3puTXFpeU5OeG4zdllYUlpKNXAvRmkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTg0ODc2NCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9jRiJ9",
  START_IMG: process.env.START_IMG || "",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "92",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
