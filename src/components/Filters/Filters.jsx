import { FilterLabel, FilterSelect, FiltersWrapper } from "./Filters.styled";

const options = [
  { value: "asc", label: "A to Z" },
  { value: "desc", label: "Z to A" },
  { value: "after10", label: "Less than 10$" },
  { value: "past10", label: "Greater than 10$" },
  { value: "pop", label: "Popular" },
  { value: "notpop", label: "Not popular" },
  { value: "all", label: "Show all" },
];

const Filters = () => {
  return (
    <FiltersWrapper>
      <FilterLabel>
        Filters
        <FilterSelect
          components={{
            IndicatorSeparator: () => null,
          }}
          options={options}
          placeholder="A to Z"
          defaultValue={options[0]}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              backgroundColor: "var(--green)",

              boxShadow: state.isFocused ? "var(--green)" : "var(--green)",
              borderRadius: "14px",
              height: "48px",
              cursor: "pointer",
              borderColor: "var(--light-green)",
              ":hover": {
                borderColor: "var(--green)",
              },
              caretColor: "transparent",
            }),
            singleValue: (b) => ({
              ...b,
              color: "var(--white)",
            }),
            dropdownIndicator: (b, s) => ({
              ...b,
              color: s.isFocused ? "var(--white)" : "var(--white)",
              ":hover": {
                color: "var(--white)",
              },
            }),
            option: (b, s) => ({
              ...b,
              color: !s.isSelected ? "rgba(25, 26, 21, 0.3)" : "var(--black)",
              backgroundColor: s.isFocused
                ? "rgba(84, 190, 150, 0.2)"
                : "var(--white)",
              boxShadow: s.isFocused
                ? "rgba(84, 190, 150, 0.2)"
                : "var(--white)",
              cursor: "pointer",

              ":active": {
                backgroundColor: s.isSelected
                  ? "rgba(84, 190, 150, 0.2)"
                  : "rgba(84, 190, 150, 0.2)",
              },
            }),
            menu: (styles) => ({
              ...styles,
              borderRadius: "14px",
              // color: "red",
            }),
            placeholder: (defaultStyles) => ({
              ...defaultStyles,
              color: "var(--white)",
            }),
            menuList: (styles) => ({
              ...styles,
              borderRadius: "14px",
              color: "var(--white)",
              "::-webkit-scrollbar": {
                width: "8px",
              },
              "::-webkit-scrollbar-track": {
                borderRadius: "10px",

                background: "rgba(255, 255, 255, 0.05)",
              },
              "::-webkit-scrollbar-thumb": {
                borderRadius: "10px",

                background: "rgba(18, 20, 23, 0.05)",
              },
              "::-webkit-scrollbar-thumb:hover": {
                borderRadius: "10px",

                background: "rgba(7, 8, 9, 0.05)",
              },
            }),
          }}
        />
      </FilterLabel>
    </FiltersWrapper>
  );
};

export default Filters;
