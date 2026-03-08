import dbPromise from "./db.js";

async function fixImages() {
  const db = await dbPromise;
  await db.run("UPDATE stops SET images = '/images/home.jpg' WHERE images = 'undefined' OR images = '' OR images IS NULL");
  console.log("Images updated successfully!");
}

fixImages();
