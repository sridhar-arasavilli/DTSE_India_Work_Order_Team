https://github.com/react-native-community/react-native-maps
#### General Usage

```js
import MapView from 'react-native-hms-map';
```
or
```js
var MapView = require('react-native-hms-map');
```

This MapView component is built so that features on the map (such as Markers, Polygons, etc.) are specified as children of the MapView itself. This provides an intuitive and react-like API for declaratively controlling features on the map.

#### Rendering a Map with an initial region

```js
 <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
```

#### Using a MapView while controlling the region as state

```js
getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

onRegionChange(region) {
  this.setState({ region });
}

render() {
  return (
    <MapView
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
  );
}
```