import React, { Component } from "react";
import { Text, Picker } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";

import { Card, CardSection, InputBox, LoginButton } from "./common";

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <InputBox
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>
        <CardSection
          style={{
            alignItems: "center"
          }}
        >
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 2 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <InputBox
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>

        <CardSection>
          <LoginButton>Create</LoginButton>
        </CardSection>
      </Card>
    );
  }
}
const styles = {
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
  };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);