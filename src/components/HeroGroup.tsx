interface Props {
  heroes: Hero[];
}

export interface Hero {
  attack_type: string;
  id: number;
  legs: number;
  localized_name: string;
  name: string;
  primary_attr: string;
  roles: string[];
}

const HeroGroup = ({ heroes }: Props) => {
  return (
    <div>
      {heroes.map((hero) => {
        return (
          <img
            key={hero.id}
            src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${hero.name.replace(
              'npc_dota_hero_',
              ''
            )}.png`}
          />
        );
      })}
    </div>
  );
};

export default HeroGroup;
