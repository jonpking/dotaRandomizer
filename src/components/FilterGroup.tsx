import './FilterGroup.css';

const FilterGroup = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h3>TYPE</h3>
      <div className="icon">CARRY</div>
      <div className="icon">SUPPORT</div>
    </div>
  );
};

export default FilterGroup;
