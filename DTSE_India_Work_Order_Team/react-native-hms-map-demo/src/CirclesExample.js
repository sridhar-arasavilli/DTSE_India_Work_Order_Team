/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import React, {Component} from 'react';
import {View} from 'react-native';
import {Circle} from 'react-native-hms-map';

const circle1 = {latitude: 12.972442, longitude: 77.580643};
const circle2 = {latitude: 12.900000, longitude: 77.580000};

export default class CirclesExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRender: props.isRender,
    };
  }

  render() {
    return (
      <View>
        <Circle
          center={circle1}
          radius={1600}
          strokeWidth={5}
          strokeColor="#F00"
          fillColor="rgba(255,200,0,0.5)"
          zIndex={2}
        />
        <Circle
          center={circle2}
          radius={5000}
          strokeWidth={5}
          strokeColor="#00F"
          fillColor="rgba(255,200,0,0.3)"
          zIndex={2}
        />
      </View>
    );
  }
}
