import os
from PIL import Image, ImageEnhance, ImageOps

def create_color_variant(src_path, dst_path, tint_rgb, brightness=1.0, contrast=1.0, saturation=1.0, blend_alpha=0.25):
    img = Image.open(src_path).convert("RGBA")
    
    # Create solid color overlay
    tint_layer = Image.new("RGBA", img.size, tint_rgb + (int(255 * blend_alpha),))
    
    # Composite overlay over base image
    blended = Image.alpha_composite(img, tint_layer)
    rgb_img = blended.convert("RGB")
    
    if brightness != 1.0:
        enhancer = ImageEnhance.Brightness(rgb_img)
        rgb_img = enhancer.enhance(brightness)
        
    if contrast != 1.0:
        enhancer = ImageEnhance.Contrast(rgb_img)
        rgb_img = enhancer.enhance(contrast)
        
    if saturation != 1.0:
        enhancer = ImageEnhance.Color(rgb_img)
        rgb_img = enhancer.enhance(saturation)
        
    rgb_img.save(dst_path, "JPEG", quality=92)
    print(f"Saved: {dst_path}")

base_dir = "public/assets/concept-2"
prod_dir = os.path.join(base_dir, "products")
os.makedirs(prod_dir, exist_ok=True)

# 2. Essential Graphic Tee (from cat_folded_shirts.jpg or oxford_white.jpg)
# Pure White, Obsidian Black, Midnight Navy
create_color_variant(f"{base_dir}/cat_folded_shirts.jpg", f"{prod_dir}/tee_white.jpg", (255, 255, 255), brightness=1.08, contrast=1.05, saturation=0.9, blend_alpha=0.15)
create_color_variant(f"{base_dir}/cat_folded_shirts.jpg", f"{prod_dir}/tee_black.jpg", (20, 22, 28), brightness=0.45, contrast=1.25, saturation=0.4, blend_alpha=0.55)
create_color_variant(f"{base_dir}/cat_folded_shirts.jpg", f"{prod_dir}/tee_navy.jpg", (22, 34, 56), brightness=0.58, contrast=1.2, saturation=1.1, blend_alpha=0.45)

# 3. Regular Fit Jeans (from cat_trousers.jpg)
# Denim Blue, Dark Wash, Washed Black
create_color_variant(f"{base_dir}/cat_trousers.jpg", f"{prod_dir}/jeans_blue.jpg", (43, 76, 126), brightness=0.88, contrast=1.15, saturation=1.3, blend_alpha=0.35)
create_color_variant(f"{base_dir}/cat_trousers.jpg", f"{prod_dir}/jeans_dark.jpg", (27, 42, 71), brightness=0.6, contrast=1.25, saturation=1.1, blend_alpha=0.5)
create_color_variant(f"{base_dir}/cat_trousers.jpg", f"{prod_dir}/jeans_black.jpg", (26, 26, 26), brightness=0.48, contrast=1.2, saturation=0.2, blend_alpha=0.55)

# 4. Smart Casual Trousers (from cat_trousers.jpg)
# Beige Khaki, Pitch Black, Warm Taupe
create_color_variant(f"{base_dir}/cat_trousers.jpg", f"{prod_dir}/trouser_beige.jpg", (194, 182, 157), brightness=1.05, contrast=1.05, saturation=0.95, blend_alpha=0.25)
create_color_variant(f"{base_dir}/cat_trousers.jpg", f"{prod_dir}/trouser_black.jpg", (18, 18, 20), brightness=0.45, contrast=1.25, saturation=0.3, blend_alpha=0.58)
create_color_variant(f"{base_dir}/cat_trousers.jpg", f"{prod_dir}/trouser_taupe.jpg", (140, 130, 117), brightness=0.85, contrast=1.1, saturation=0.8, blend_alpha=0.35)

# 5. Textured Kurta (from ethnic_wear_category.jpg)
# Ivory Cream, Deep Navy, Royal Maroon
create_color_variant(f"{base_dir}/ethnic_wear_category.jpg", f"{prod_dir}/kurta_ivory.jpg", (237, 232, 208), brightness=1.05, contrast=1.05, saturation=0.85, blend_alpha=0.2)
create_color_variant(f"{base_dir}/ethnic_wear_category.jpg", f"{prod_dir}/kurta_navy.jpg", (22, 34, 56), brightness=0.62, contrast=1.2, saturation=1.2, blend_alpha=0.48)
create_color_variant(f"{base_dir}/ethnic_wear_category.jpg", f"{prod_dir}/kurta_maroon.jpg", (107, 23, 36), brightness=0.68, contrast=1.2, saturation=1.35, blend_alpha=0.42)

# 6. Slim Fit Shirt (from hero_campaign.jpg)
# Midnight Navy, Warm Beige, Olive Green
create_color_variant(f"{base_dir}/hero_campaign.jpg", f"{prod_dir}/slim_navy.jpg", (22, 34, 56), brightness=0.95, contrast=1.1, saturation=1.1, blend_alpha=0.25)
create_color_variant(f"{base_dir}/hero_campaign.jpg", f"{prod_dir}/slim_beige.jpg", (210, 180, 140), brightness=1.1, contrast=1.05, saturation=0.9, blend_alpha=0.3)
create_color_variant(f"{base_dir}/hero_campaign.jpg", f"{prod_dir}/slim_olive.jpg", (85, 107, 47), brightness=0.9, contrast=1.1, saturation=1.15, blend_alpha=0.35)
