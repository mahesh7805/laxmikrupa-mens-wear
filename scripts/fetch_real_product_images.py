import os
import urllib.request
from PIL import Image

def download_and_crop(url, dst_path, target_ratio=(3, 4)):
    headers = {'User-Agent': 'Mozilla/5.0'}
    req = urllib.request.Request(url, headers=headers)
    
    tmp_path = dst_path + ".tmp"
    with urllib.request.urlopen(req) as response, open(tmp_path, 'wb') as out_file:
        out_file.write(response.read())
        
    img = Image.open(tmp_path).convert("RGB")
    width, height = img.size
    
    # Calculate crop box for 3:4 aspect ratio
    target_w_ratio, target_h_ratio = target_ratio
    desired_height = int(width * (target_h_ratio / target_w_ratio))
    
    if desired_height <= height:
        top = (height - desired_height) // 2
        bottom = top + desired_height
        cropped = img.crop((0, top, width, bottom))
    else:
        desired_width = int(height * (target_w_ratio / target_h_ratio))
        left = (width - desired_width) // 2
        right = left + desired_width
        cropped = img.crop((left, 0, right, height))
        
    resized = cropped.resize((750, 1000), Image.Resampling.LANCZOS)
    resized.save(dst_path, "JPEG", quality=92)
    
    if os.path.exists(tmp_path):
        os.remove(tmp_path)
    print(f"Downloaded & processed: {dst_path}")

prod_dir = "public/assets/concept-2/products"
os.makedirs(prod_dir, exist_ok=True)

urls = {
    'tee_navy.jpg': 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=1000&auto=format&fit=crop&q=80',
    'jeans_blue.jpg': 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=1000&auto=format&fit=crop&q=80',
    'slim_olive.jpg': 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=1000&auto=format&fit=crop&q=80'
}

for name, url in urls.items():
    dst = os.path.join(prod_dir, name)
    download_and_crop(url, dst)
