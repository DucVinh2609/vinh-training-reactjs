import React, { Component } from 'react';

import { listUnits, idKm } from './contants';

export class Table extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  converToKm(value, unit) {
    return value / Math.pow(10, (unit - idKm))
  }

  get getData() {
    let listData = []
    const valueKm = this.converToKm(this.props.value, this.props.unit)
    listUnits.forEach(item => {
      listData.push({ unit: item.text, value: valueKm * Math.pow(10, (item.id - idKm)) })
    })
    return listData
  }

  render() {
    return (
      <table>
        <tr>
          <th>Đơn vị</th>
          <th>Giá trị</th>
        </tr>
        {this.getData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.unit}</td>
              <td>{val.value}</td>
            </tr>
          )
        })}
      </table>
    )
  }
}
