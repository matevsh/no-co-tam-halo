export const availableFurniture: FurnitureBase[] = [
  {
    id: 'd2178dg12bxx',
    name: 'Sofa Victoria',
    category: 'sofas',
  },
  {
    id: 'zz9xz8xn21',
    name: 'Stół Adam',
    category: 'tables',
  },
]

export const availableConfigurations: Record<string, Record<string, FurnitureConfiguration>> = {
  sofas: {
    mainColor: {
      label: 'Dostępne kolory siedziska z oparciem',
      options: ['niebieski', 'czerwony', 'zielony'],
    },
    pillowsColor: {
      label: 'Dostępne kolory poduszek',
      options: ['niebieski', 'czerwony', 'zielony'],
    },
    legsColor: {
      label: 'Dostępne kolory poduszek',
      options: ['dąb', 'mahoń'],
    },
  },
  tables: {
    topColor: {
      label: 'Dostępne kolory blatu',
      options: ['dąb', 'mahoń'],
    },
    legsColor: {
      label: 'Dostępne kolory nóg',
      options: ['dąb', 'mahoń'],
    },
  },
}

export type FurnitureBase = {
  id: string
  name: string
  category: string
}

export type FurnitureConfiguration = {
  label: string
  options: string[]
}

export type FurnitureFullyConfigured = FurnitureBase & Record<string, string>
