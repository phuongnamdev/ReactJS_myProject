import React, { Component } from 'react';
import './App.scss';
import "../src/component/shared/fontAwesome";
import HomeTemplate from './template/homeTemplate';
import AdminTemplate from './template/adminTemplate';


class App extends Component {
  loadRouter = () =>{
    switch (window.location.pathname){
      case '/home':{
        return <HomeTemplate />
      }

      case '/admin':{
        return <AdminTemplate />
      }
      case '/admin/admindashboard':{
        return <AdminTemplate />
      }
      case '/admin/amdincourse':{
        return <AdminTemplate />
      }
      case '/admin/adminuser':{
        return <AdminTemplate />
      }
      
      case '/':{
        return <HomeTemplate />
      }
      default:{
        return <HomeTemplate />
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.loadRouter()}
      </div>
    );
  }
}

export default App;
