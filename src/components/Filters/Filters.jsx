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
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused
                ? "var(--light-green)"
                : "transparent",
              backgroundColor: "var(--green)",
              color: "var(--white)",
              borderRadius: "14px",
              height: "48px",
            }),
            dropdownIndicator: (s) => ({
              ...s,
              color: "var(--white)",
            }),
            option: (b) => ({
              ...b,
              color: "var(--black)",
              cursor: "pointer",
            }),
            menu: (styles) => ({
              ...styles,
              borderRadius: "14px",
              color: "var(--white)",
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
