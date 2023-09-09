import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
  name = name.toLocaleLowerCase().trim();

  return heroes.filter(
    hero => hero.superhero.toLocaleLowerCase().includes( name )
  )
}
