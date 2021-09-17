import React from "react";
import { Select } from "antd";
const { Option } = Select;

const FieldSelectCountry = (props) => {
  const { countries, handleSelectedCountry, isLoading } = props;

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a countries"
        optionFilterProp="children"
        onChange={(value) => handleSelectedCountry(value)}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        defaultValue="vietnam"
        disabled={isLoading}
      >
        {countries &&
          countries.map((country) => {
            const { Slug, Country } = country;
            return (
              <Option key={Slug} value={Slug}>
                {Country}
              </Option>
            );
            return;
          })}
      </Select>
    </div>
  );
};
export default FieldSelectCountry;
