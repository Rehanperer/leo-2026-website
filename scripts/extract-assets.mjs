import sharp from 'sharp';

async function extractAssets() {
  const input = 'src/assets/original-logo.png';
  const meta = await sharp(input).metadata();
  const w = meta.width;
  const h = meta.height;
  console.log(`Original dimensions: ${w}x${h}`);

  // 1. Find center and circle diameter:
  // In a 1022x1024 image, the circle is roughly centered at (511, 512).
  // Let's measure where the outer gold circle lies.
  // The outer circle has radius roughly 300-320px (diameter ~600-640px).
  
  // Let's create an exact circular mask for the crest:
  // Center: x=511, y=512, radius=312
  const cx = Math.round(w / 2);
  const cy = Math.round(h / 2);
  const r = 312; // Radius of outer gold border
  const size = r * 2;

  // SVG circular mask
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${r}" cy="${r}" r="${r - 1}" fill="white" />
    </svg>`
  );

  // Extract crest square
  const crestSquare = await sharp(input)
    .extract({
      left: Math.max(0, cx - r),
      top: Math.max(0, cy - r),
      width: size,
      height: size,
    })
    .toBuffer();

  // Apply circular mask for clean transparent PNG crest
  await sharp(crestSquare)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toFile('src/assets/crest-circle.png');
  console.log('Created src/assets/crest-circle.png');

  // Also copy to public for favicon & fast direct loading
  await sharp('src/assets/crest-circle.png')
    .resize(512, 512)
    .png()
    .toFile('public/crest.png');
  await sharp('src/assets/crest-circle.png')
    .resize(192, 192)
    .png()
    .toFile('public/icon.png');
  await sharp('src/assets/crest-circle.png')
    .resize(64, 64)
    .png()
    .toFile('public/favicon.png');

  // 2. Extract central blooming iris and earth (the inner flower artwork):
  // Inner artwork is roughly radius ~140px around center
  const innerR = 145;
  const innerSize = innerR * 2;
  const innerCircleMask = Buffer.from(
    `<svg width="${innerSize}" height="${innerSize}">
      <circle cx="${innerR}" cy="${innerR}" r="${innerR - 1}" fill="white" />
    </svg>`
  );
  const innerArtwork = await sharp(input)
    .extract({
      left: cx - innerR,
      top: cy - innerR,
      width: innerSize,
      height: innerSize,
    })
    .toBuffer();

  await sharp(innerArtwork)
    .composite([{ input: innerCircleMask, blend: 'dest-in' }])
    .png()
    .toFile('src/assets/blooming-iris-globe.png');
  console.log('Created src/assets/blooming-iris-globe.png');

  // Copy to public as well
  await sharp('src/assets/blooming-iris-globe.png')
    .resize(400, 400)
    .png()
    .toFile('public/blooming-iris-globe.png');

  // 3. Extract top-left corner watercolor iris
  await sharp(input)
    .extract({
      left: 0,
      top: 0,
      width: 420,
      height: 420,
    })
    .png()
    .toFile('src/assets/iris-top-left.png');
  await sharp('src/assets/iris-top-left.png')
    .webp({ quality: 90 })
    .toFile('public/iris-top-left.webp');

  // 4. Extract bottom-right corner watercolor iris
  await sharp(input)
    .extract({
      left: w - 420,
      top: h - 420,
      width: 420,
      height: 420,
    })
    .png()
    .toFile('src/assets/iris-bottom-right.png');
  await sharp('src/assets/iris-bottom-right.png')
    .webp({ quality: 90 })
    .toFile('public/iris-bottom-right.webp');

  // 5. Full background watercolor texture (webp optimized for ambient wallpaper)
  await sharp(input)
    .resize(1200, 1200, { fit: 'cover' })
    .webp({ quality: 85 })
    .toFile('public/watercolour-bg.webp');

  console.log('All graphic assets extracted successfully!');
}

extractAssets().catch(console.error);
