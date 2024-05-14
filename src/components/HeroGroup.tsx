import './HeroGroup.css';

interface Props {
  heroes: Hero[];
  title: string;
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

const HeroGroup = ({ heroes, title }: Props) => {
  return (
    <div>
      <h2>
        <img src={`/images/${title.toLowerCase()}.webp`} />
        {title}
      </h2>
      {heroes.map((hero) => {
        return (
          <img
            className="heroImage"
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
