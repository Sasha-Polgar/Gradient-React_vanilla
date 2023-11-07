// Utilisation des `template literal types` pour un meilleur typage
export type TColor = `#${string}`;
export type TDirection = `${number}deg`;

// Exemples :
// const goodColor: TColor = '#123456'; // → OK
// const badColor: TColor = '123456'; // → KO

// const goodDirection: TDirection = '90deg'; // → OK
// const badDirectionRad: TDirection = '90rad'; // → KO
// const badDirectionString: TDirection = 'azedeg'; // → KO

export interface AppState {
  firstColor: TColor;
  lastColor: TColor;
  direction: TDirection;
  nbColors: number;
}
