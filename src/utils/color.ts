import { TColor } from '../@types';

export function randomHexColor(): TColor {
  /*
    Math.random() → retourne un nombre pseudo-aléatoire entre [0, 1[
    toString(16) → convertit le nombre en chaine de caractère sur une base hexadécimale
    slice(2, 8) → retourne une sous-chaîne à partir de la chaîne de caractères donnée
      2 = index du début ; 8 = index de fin (non compris)

    Exemple :
    random → 0.33192420384606236
    // toString() → '0.33192420384606236'
    toString(16) → '0.54f8fc1045097'
    slice(2, 8) → '54f8fc'
    # (concaténé) → '#54f8fc' = une couleur aléatoire
  */
  return `#${Math.random().toString(16).slice(2, 8)}`;
}

export function generateSpanColor(color: TColor) {
  return `
    <span style="color:${color}">${color}</span>
  `;
}
