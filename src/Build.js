import React, { Component } from 'react';

import { Table } from './Table';
import { listUnits } from './contants';
import { getNameUnit } from './commonFunctions';

let value = 0;
let unit = 0;

export class Build extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '', unit: 0 };
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleChangeUnit = this.handleChangeUnit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeValue(event) {
    value = event.target.value
  }

  handleChangeUnit(event) {
    unit = parseInt(event.target.value)
  }

  handleSubmit(event) {
    alert('Bạn muốn dựng bảng đo độ dài cho giá trị ' + value + ' với đơn vị ' + getNameUnit(unit) + ' không?');
    event.preventDefault();
    this.setState({ value: value });
    this.setState({ unit: unit });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input className='mr-3' type="number" id="value" onChange={this.handleChangeValue} />
          <select className='mr-3' name="units" id="unit" onChange={this.handleChangeUnit}>
            {listUnits.map((val, key) => {
              return (
                <option key={key} value={val.id}>{val.text}</option>
              )
            })}
          </select>
          <input type="submit" value="Build" />
        </form>

        <Table value={this.state.value} unit={this.state.unit}/>
      </>
    )
  }
}