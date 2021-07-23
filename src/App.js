import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLogin from './components/MainLogin'
import MainSignUp from './components/MainSignUp'
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import data from './components/data/Data';
import { easeInOutCubic } from './components/utils/Easing';
import jump from './components/jump.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: data.properties,
      activeProperty: data.properties[0],
      filterIsVisible: false,
      filterBedrooms: 'any',      
      filterBathrooms: 'any',
      filterCars: 'any',
      filterSort: 'any',
      priceFrom: 50000,
      priceTo: 1000000,
      filteredProperties: [],
      isFiltering: false,
    };

    this.setActiveProperty = this.setActiveProperty.bind(this);
  }

  setActiveProperty(property, scroll) {
    const { index } = property;

    this.setState({
      activeProperty: property,
    });

    if (scroll) {      
      const target = `#card-${index}`;
      jump(target, {
        duration: 800,
        easing: easeInOutCubic,
      });
    }
  }

  toggleFilter = e => {
    const { filterIsVisible } = this.state;
    e.preventDefault();
    this.setState({
      filterIsVisible: !filterIsVisible,
    });
  };

  handleFilterChange = e => {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.filterProperties();
      }
    );
  };

  filterProperties = () => {
    const {
      properties,
      filterBedrooms,
      filterBathrooms,
      filterCars,
      filterSort,
      priceFrom,
      priceTo,
    } = this.state;
    const isFiltering =
      filterBedrooms !== 'any' ||
      filterBathrooms !== 'any' ||
      filterCars !== 'any' ||
      priceFrom !== '0' ||
      priceTo !== '1000001';
  

    const getFilteredProperties = propertiesList => {
      const filteredProperties = propertiesList
        .filter(
          property =>
            property.bedrooms === parseInt(filterBedrooms) ||
            filterBedrooms === 'any'
        )
        .filter(
          property =>
            property.bathrooms === parseInt(filterBathrooms) ||
            filterBathrooms === 'any'
        )
        .filter(
          property =>
            property.carSpaces === parseInt(filterCars) || filterCars === 'any'
        )
        .filter(
          property => property.price >= priceFrom && property.price <= priceTo
        );
      
      switch (filterSort) {
        case '0':
          filteredProperties.sort((a, b) => a.price - b.price);
          break;
        case '1':
          filteredProperties.sort((a, b) => b.price - a.price);
          break;
        default:
        
          filteredProperties;
      }

      return filteredProperties;
    };

    this.setState({
      filteredProperties: getFilteredProperties(properties),
      activeProperty: getFilteredProperties(properties)[0] || properties[0],
      isFiltering,
    });
  };

  clearFilter = (e, form) => {
    e.preventDefault();
    console.log('Clear the filters!', e, form);

    const { properties } = this.state;

    const sortedProperties = properties.sort((a, b) => a.index - b.index);

    console.log(sortedProperties);

    this.setState({
      properties: sortedProperties,
      filterBedrooms: 'any',
      filterBathrooms: 'any',
      filterCars: 'any',
      priceFrom: 50000,
      priceTo: 1000000,
      filteredProperties: [],
      isFiltering: false,
      activeProperty: properties[0],
    });

    form.current.reset();
  };

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <br />
          </div>
          <Switch>
            <Route path='/signin' component={MainLogin} />
            <Route path='/signup' component={MainSignUp} />
            <Route path='/' component={MainPage} />
          </Switch>
          <div>
            <Footer />
          </div>
        </Router>
      </>
    )
  }
}
export default App;
