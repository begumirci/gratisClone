export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9-]/g, "-") // Harf, rakam, tire dışındaki karakterleri temizle
    .replace(/-+/g, "-") // Ardışık tireleri birleştir
    .replace(/^-+|-+$/g, ""); // Başındaki ve sonundaki tireleri temizle
}

export function capitalizeFirstLetter(str) {
  const [firstLetter, ...rest] = str;
  return firstLetter.toUpperCase() + rest.join("");
}
