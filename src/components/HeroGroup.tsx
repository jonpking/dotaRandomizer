interface Props {
  heroes: Hero[];
}

interface Hero {
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
        return <div>{hero.localized_name}</div>;
      })}
    </div>
  );
};

export default HeroGroup;
