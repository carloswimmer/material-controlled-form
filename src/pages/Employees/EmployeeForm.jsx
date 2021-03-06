import React, { useCallback } from "react";
import { Grid } from "@material-ui/core";

import { useForm, Form } from "../../components/useForm";
import Input from "../../components/controls/Input";
import Radio from "../../components/controls/Radio";
import Select from "../../components/controls/Select";
import Checkbox from "../../components/controls/Checkbox";
import DatePicker from "../../components/controls/DatePicker";
import Button from "../../components/controls/Button";
import * as Yup from "yup";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const { values, setValues, handleInputChange, handleError, error } = useForm(
    initialValues
  );

  const fullNameConstraint = {
    fullName: Yup.string().required("Required field"),
  };

  const handleSubmit = useCallback(() => {
    console.log("submitted: ", values);
  }, [values]);

  const reset = useCallback(() => {
    setValues(initialValues);
  }, [setValues]);

  return (
    <Form>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            onBlur={(e) => handleError(e, fullNameConstraint)}
            error={error}
          />
          <Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item container xs={6}>
          <Radio
            label="Gender"
            name="gender"
            value={values.gender}
            items={genderItems}
            onChange={handleInputChange}
          />
          <Select
            label="Department"
            name="departmentId"
            value={values.departmentId}
            options={employeeService.getDepartmentCollection()}
            onChange={handleInputChange}
          />
          <DatePicker
            label="Hire Date"
            name="hireDate"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Checkbox
            label="Permanent Employee"
            name="isPermanent"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <Grid item container justify="flex-end">
            <Grid item>
              <Button
                size="large"
                color="secondary"
                onClick={handleSubmit}
                text="Submit"
              />
            </Grid>
            <Grid item>
              <Button
                size="large"
                color="default"
                onClick={reset}
                text="Reset"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
