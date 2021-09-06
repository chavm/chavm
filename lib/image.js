async function retryResize(options, retries = 0) {
    let { imagePath, size, quality = 60, maxRetries = 5 } = options;
  let image = null;
    try {
        image = await Jimp.read(imagePath);
        await image.resize(size, Jimp.AUTO);
        await image.quality(quality);
    } catch (e) {
        if (retries >= maxRetries) {
            throw e;
        }
                
        image = await retryResize(options, retries++);
    }
   

    return image;
}
