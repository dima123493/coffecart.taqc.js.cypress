export const CoffeeTypes = {
    ESPRESSO: 'Espresso',
    ESPRESSO_MACCHIATO: 'Espresso Macchiato',
    CAPPUCCINO: 'Cappuccino',
    MOCHA: 'Mocha',
    FLAT_WHITE: 'Flat White',
    AMERICANO: 'Americano',
    CAFE_LATTE: 'Cafe Latte',
    ESPRESSO_CON_PANNA: 'Espresso Con Panna',
    CAFE_BREVE: 'Cafe Breve',
} as const;

export type CoffeeType = keyof typeof CoffeeTypes;